import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.page.html',
  styleUrls: ['./vocabulary.page.scss'],
})
export class VocabularyPage implements OnInit {

  selectedPart: string = 'part1';
  defaultBackHref: string = '';
  chapterno: string = '';
  vocList: string[] = [];
  vocListUserSelection: string[] = [];
  vocListGerman: string[] = [];
  vocAudioList: string[] = [];
  currentAudio: string | null = null; // Current audio file
  currentIndex: number = 0;
  textToDetails: string = '';
  selectedLanguage: string = 'English'; // Default language
  isTurning: boolean = false;
  

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
  
  constructor( private languageService: LanguageService, private route: ActivatedRoute, private location: Location, private translate: TranslateService) {
    translate.addLangs(['English', 'Arabic','Persian','Ukrain','Vietnam','Albanian','French','Spanish','Russian','Chinese','Tuerk']);
    translate.setDefaultLang('English');
  
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang && browserLang.match(/English|Arabic|Iran|Ukrain|Vietnam|Albanian|French|Spanish|Russian|Chinese|Tuerk/) ? browserLang : 'English');
  }

  ngOnInit() {
    // Access the 'chapterno' query parameter
    this.route.queryParams.subscribe((params) => {
      this.chapterno = params['chapterno'] || '1'; // Default to '1' if not found
      this.getVocabularyList();
      this.setBackHref(); // Set dynamic back link
    });
     this.selectedLanguage = this.languageService.getLanguage();
  }


  getVocabularyList() {

      // Fetch the user's selected language list
      this.translate.use(this.selectedLanguage); // Switch to the selected language
      this.translate.get(`VocabularyList.${this.chapterno}`).subscribe((userLanguageList: string[]) => {
        this.vocListUserSelection = userLanguageList;
        // console.log(`Vocabulary List in ${this.selectedLanguage}:`, this.vocListUserSelection);
      });

    // Fetch the German list (always in German)
    this.translate.use('French'); // Set to German
    this.translate.get(`VocabularyList.${this.chapterno}`).subscribe((germanList: string[]) => {
      this.vocListGerman = germanList;
      // console.log('German List:', this.vocListGerman);
  
  
      // Fetch the audio list in the user's selected language
      this.translate.get(`vocAudioList.${this.chapterno}`).subscribe((audioList: string[]) => {
        this.vocAudioList = audioList;
        // console.log(this.vocAudioList);
        if (this.vocAudioList.length > 0) {
          this.currentIndex = 0;  // Ensure we start at index 0
          this.currentAudio = this.vocAudioList[0]; // Set the first audio but don't auto-play yet
        }
      });
    });
  }
  

  navigate(direction: number): void {
    if ((direction === -1 && this.currentIndex === 0) || 
        (direction === 1 && this.currentIndex === this.vocListGerman.length - 1)) {
      return;
    }
  
    this.isTurning = true;
  
    setTimeout(() => {
      this.currentIndex += direction;
      this.updateAudioSource(true); // Now it plays only when navigating
      this.isTurning = false;

      // Check if this is the last word in the list (user finished vocabulary)
      if (this.currentIndex === this.vocListGerman.length - 1) {
        this.completeVocabularyForChapter(Number(this.chapterno));
      }

    }, 300);
  }
  

  updateAudioSource(autoPlay = true): void {
    if (this.vocAudioList.length > this.currentIndex) {
      this.currentAudio = this.vocAudioList[this.currentIndex];
  
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

  completeVocabularyForChapter(chapterIndex: number) {
    let chapterProgress = JSON.parse(localStorage.getItem('chapterProgress') || '{}');
  
    if (!chapterProgress[chapterIndex]) {
      chapterProgress[chapterIndex] = { vocab: false, sentence: false };
    }
  
    if (!chapterProgress[chapterIndex].vocab) {
      chapterProgress[chapterIndex].vocab = true;
  
      // Increase progress by 5% for vocabulary completion
      let completedChapters = Number(localStorage.getItem('completedChapters')) || 0;
      completedChapters += 5;
  
      // Save updated progress
      localStorage.setItem('chapterProgress', JSON.stringify(chapterProgress));
      localStorage.setItem('completedChapters', completedChapters.toString());
  
      // Notify other pages about the update
      window.dispatchEvent(new Event('storage'));
    }
  }
  

  switchLanguage(language: string) {
    this.selectedLanguage = language;
  
    // Persist the selected language in localStorage
    localStorage.setItem('selectedLanguage', language);
  
    // Update the translation service and re-fetch the vocabulary list
    this.translate.use(language).subscribe(() => {
      this.getVocabularyList();
    });
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

  refreshPage() {
    window.location.reload();
  }


}
