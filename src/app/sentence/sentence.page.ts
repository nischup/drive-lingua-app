import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.page.html',
  styleUrls: ['./sentence.page.scss'],
})
export class SentencePage implements OnInit {

  selectedPart: string = 'part1';
  defaultBackHref: string = '';
  chapterno: string = '';
  textTitle: string = '';
  sentList: string[] = [];
  sentListEnglish: string[] = [];
  sentListGerman: string[] = [];
  currentIndex: number = 0;
  textToDetails: string = '';
  selectedLanguage: string = 'English'; // Default language
  isTurning: boolean = false;
  senAudioList: string[] = [];
  currentAudio: string | null = null; // Current audio file
  pageType: string = '';

  languages = [
    { name: 'English', flag: 'assets/flags/english.png' },
    { name: 'Arabic', flag: 'assets/flags/arabic.png' },
    { name: 'Persian', flag: 'assets/flags/iran.png' },
    { name: 'Ukrain', flag: 'assets/flags/ukrain.png' },
    { name: 'Vietnam', flag: 'assets/flags/vietnam.png' },
    { name: 'Albanian', flag: 'assets/flags/albanian.png' },
    { name: 'French', flag: 'assets/flags/french.png' },
    { name: 'Spanish', flag: 'assets/flags/spanish.jpg' },
    { name: 'Russian', flag: 'assets/flags/russian.jpg' },
    { name: 'Chinese', flag: 'assets/flags/chinese.png' },
    { name: 'Tuerk', flag: 'assets/flags/tuerk.png' },
  ];
  
  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private translate: TranslateService) {
    translate.addLangs([
      'English', 'Arabic', 'Persian', 'Ukrainian', 'Vietnamese', 'Albanian',
      'French', 'Spanish', 'Russian', 'Chinese', 'Turkish'
    ]);
    const storedLang = localStorage.getItem('selectedLanguage');
    console.log(storedLang);
    if (storedLang) {
      this.selectedLanguage = storedLang;
    } else {
      const browserLang = translate.getBrowserLang();
      if (browserLang && translate.getLangs().includes(browserLang)) {
        this.selectedLanguage = browserLang;
      }
    }
    translate.setDefaultLang(this.selectedLanguage);
    translate.use(this.selectedLanguage);
  }


 ngOnInit() {
    this.pageType = this.route.snapshot.routeConfig?.path || 'sentence'; 
    const currentChapter = sessionStorage.getItem('chapterno');
    const currentPageType = sessionStorage.getItem('pageType');
    
    this.route.queryParams.subscribe((params) => {
      const newChapterno = params['chapterno'] || '1';

      if (currentChapter !== newChapterno || currentPageType !== this.pageType) {
        sessionStorage.setItem('chapterno', newChapterno);
        sessionStorage.setItem('pageType', this.pageType);
        location.reload();
      } else {
        this.chapterno = newChapterno;
        if (this.pageType === 'sentence') {
          this.getSentenceList();
        }
        this.setBackHref();
      }
    });
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      this.switchLanguage(storedLanguage);
    } else {
      this.translate.setDefaultLang(this.selectedLanguage);
    }
  }

  getSentenceList() {
    this.translate.get(`SentenceList.${this.chapterno}`)
      .subscribe((translatedTitle: string[]) => {
        this.sentList = translatedTitle;
        // console.log(this.sentList);
      });

      this.translate.use('French');
      this.translate.get(`SentenceList.${this.chapterno}`).subscribe((germanList: string[]) => {
      this.sentListGerman = germanList;
      // console.log(this.sentListGerman);
         this.translate.get(`senAudioList.${this.chapterno}`).subscribe((audioList: string[]) => {
          this.senAudioList = audioList;
          // console.log('Audio List:', this.senAudioList);
        if (this.senAudioList.length > 0) {
          this.currentIndex = 0;  // Ensure we start at index 0
          this.currentAudio = this.senAudioList[0]; // Set the first audio but don't auto-play yet
        }

        });
    });
  }


     navigate(direction: number): void {
      if ((direction === -1 && this.currentIndex === 0) || 
          (direction === 1 && this.currentIndex === this.sentListGerman.length - 1)) {
        return;
      }
    
      // this.isTurning = true;
    
      setTimeout(() => {
        this.currentIndex += direction;
        this.updateAudioSource(true); // Now it plays only when navigating
        this.isTurning = false;

        // Check if this is the last word in the list (user finished vocabulary)
        if (this.currentIndex === this.sentListGerman.length - 1) {
          this.completeSentenceForChapter(Number(this.chapterno));
        }

      }, 300);
    }

    updateAudioSource(autoPlay = true): void {
    if (this.senAudioList.length > this.currentIndex) {
      this.currentAudio = this.senAudioList[this.currentIndex];
  
      setTimeout(() => {
        const audioElement = document.getElementById("audioPlayer") as HTMLAudioElement;
        if (audioElement) {
          audioElement.load(); // Reloads the new source
          // if (autoPlay) {
          //   audioElement.play().catch(error => console.log("Auto-play failed:", error));
          // }
        }
      }, 100);
    } else {
      this.currentAudio = null;
    }
  }

  completeSentenceForChapter(chapterIndex: number) {
    let chapterProgress = JSON.parse(localStorage.getItem('chapterProgress') || '{}');
    if (!chapterProgress[chapterIndex]) {
      chapterProgress[chapterIndex] = { vocab: false, sentence: false };
    }

    if (!chapterProgress[chapterIndex].sentence) {
      chapterProgress[chapterIndex].sentence = true;

      let completedChapters = Number(localStorage.getItem('completedChapters')) || 0;
      completedChapters += 5; // Add 5% only if not already completed
      localStorage.setItem('completedChapters', completedChapters.toString());

      localStorage.setItem('chapterProgress', JSON.stringify(chapterProgress));
      window.dispatchEvent(new Event('storage'));
    }
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.selectedLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
  }


  onSegmentChange(event: any) {
    console.log('Selected Part:', event.detail.value);
    this.selectedPart = event.detail.value;
  }

  setBackHref() {
    this.defaultBackHref = `/tabs/chapter${this.chapterno}`;
  }

  handleBackClick() {
    sessionStorage.setItem('lastPageType', 'vocabulary'); // Track last visited page
    this.router.navigate([`/tabs/chapter${this.chapterno}`]).then(() => {
      location.reload(); // Reload after navigating back
    });
  }

  refreshPage() {
    window.location.reload();
  }

}
