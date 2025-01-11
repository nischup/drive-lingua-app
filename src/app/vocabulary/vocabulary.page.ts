import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


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
  vocListEnglish: string[] = [];
  vocListGerman: string[] = [];
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
    { name: 'French', flag: 'assets/flags/german.png' },
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
      this.getVocabularyList();
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

  // getVocabularyList() {
  //   this.translate
  //     .get(`VocabularyList.${this.chapterno}`)
  //     .subscribe((translatedTitle: string[]) => {
  //       this.vocList = translatedTitle;
  //       console.log(this.vocList);
  //     });
  // }

  getVocabularyList() {
  this.translate.use('English'); // Temporarily set to English
  this.translate.get(`VocabularyList.${this.chapterno}`).subscribe((englishList: string[]) => {
    this.vocListEnglish = englishList;

    this.translate.use('French'); // Temporarily set to German
    this.translate.get(`VocabularyList.${this.chapterno}`).subscribe((germanList: string[]) => {
      this.vocListGerman = germanList;

      // Reset to the user's selected language
      this.translate.use(this.selectedLanguage);
    });
  });
}


  navigate(direction: number): void {
    if ((direction === -1 && this.currentIndex === 0) || 
        (direction === 1 && this.currentIndex === this.vocList.length - 1)) {
      return; // Prevent navigating out of bounds
    }

    // Trigger the page-turn animation
    this.isTurning = true;

    // Wait for animation to complete before updating content
    setTimeout(() => {
      this.currentIndex += direction;
      this.isTurning = false; // Reset the animation state
    }, 300); // Match the animation duration
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
