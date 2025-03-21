import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-beforeexam',
  templateUrl: './beforeexam.page.html',
  styleUrls: ['./beforeexam.page.scss'],
})
export class BeforeexamPage implements OnInit {


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
  
    constructor(private translate: TranslateService, private route: ActivatedRoute, private location: Location) {
      translate.addLangs([
        'English', 'Arabic', 'Persian', 'Ukrainian', 'Vietnamese', 'Albanian',
        'French', 'Spanish', 'Russian', 'Chinese', 'Turkish'
      ]);
      const storedLang = localStorage.getItem('selectedLanguage');
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
     // Access the 'chapterno' query parameter
     this.route.queryParams.subscribe(params => {
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
    this.defaultBackHref = '/tabs/tab2';
  }

  goBack() {
    this.location.back(); // Navigate to the previous page in history
  }

}
