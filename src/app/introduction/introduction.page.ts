import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.scss'],
})
export class IntroductionPage implements OnInit {

  chapterno: string = '';
  textTitle: string = '';
  textToDetails: string = '';
  defaultBackHref: string = '';
  selectedLanguage: string = 'English'; // Default language

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
      this.chapterno = params['chapterno'] || '1'; // Default to '1' if not found
      this.setTextBasedOnChapter();
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

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.selectedLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
  }

  setBackHref() {
    this.defaultBackHref = `/tabs/chapter${this.chapterno}`;
  }

  setTextBasedOnChapter() {
    this.translate.get(`chapters.${this.chapterno}.title`).subscribe((translatedTitle: string) => {
      this.textTitle = translatedTitle;
      console.log(this.textTitle);
    });

    this.translate.get(`chapters.${this.chapterno}.details`).subscribe((translatedDetails: string) => {
      this.textToDetails = translatedDetails;
    });
  }

  goBack() {
    this.location.back(); // Navigate to the previous page in history
  }

}
