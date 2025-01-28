import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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
  
  constructor(private route: ActivatedRoute, private location: Location, private translate: TranslateService) {
    translate.addLangs(['English', 'Arabic','Persian','Ukrain','Vietnam','Albanian','French','Spanish','Russian','Chinese','Tuerk']);
    translate.setDefaultLang('English');
  
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang && browserLang.match(/English|Arabic|Iran|Ukrain|Vietnam|Albanian|French|Spanish|Russian|Chinese|Tuerk/) ? browserLang : 'English');
  }

  ngOnInit() {
     // Access the 'chapterno' query parameter
     this.route.queryParams.subscribe(params => {
      this.chapterno = params['chapterno'] || '1'; // Default to '1' if not found
      // this.setTextBasedOnChapter();
      this.getSentenceList();
      this.setBackHref(); // Set dynamic back link
    });

       // Retrieve the persisted language
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
        console.log(this.sentList);
      });

      this.translate.use('French');
      this.translate.get(`SentenceList.${this.chapterno}`).subscribe((germanList: string[]) => {
      this.sentListGerman = germanList;
      console.log(this.sentListGerman);

         // Fetch the audio list in the user's selected language
         this.translate.get(`senAudioList.${this.chapterno}`).subscribe((audioList: string[]) => {
          this.senAudioList = audioList;
          console.log('Audio List:', this.senAudioList);
        });


    });
  }

// getSentenceList() {

//   this.translate.use('English'); 
//   this.translate.get(`SentenceList.${this.chapterno}`).subscribe((englishList: string[]) => {
//     this.sentListEnglish = englishList;

//     this.translate.use('French');
//     this.translate.get(`SentenceList.${this.chapterno}`).subscribe((germanList: string[]) => {
//       this.sentListGerman = germanList;

//       this.translate.use(this.selectedLanguage);
//     });
//   });
// }



  navigate(direction: number) {
    const newIndex = this.currentIndex + direction;
    if (newIndex >= 0 && newIndex < this.sentList.length) {
      this.currentIndex = newIndex;
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

  goBack() {
    this.location.back(); // Navigate to the previous page in history
  }


}
