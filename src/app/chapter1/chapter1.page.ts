import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-chapter1',
  templateUrl: './chapter1.page.html',
  styleUrls: ['./chapter1.page.scss'],
})
export class Chapter1Page {
  // List of languages with their flags
  languages = [
    { name: 'English', flag: 'assets/flags/english.png' },
    { name: 'Arabic', flag: 'assets/flags/arabic.png' },
    { name: 'Persian', flag: 'assets/flags/iran.png' },
    { name: 'Ukrainian', flag: 'assets/flags/ukrain.png' },
    { name: 'Vietnamese', flag: 'assets/flags/vietnam.png' },
    { name: 'Albanian', flag: 'assets/flags/albanian.png' },
    { name: 'French', flag: 'assets/flags/french.png' },
    { name: 'Spanish', flag: 'assets/flags/spanish.jpg' },
    { name: 'Russian', flag: 'assets/flags/russian.jpg' },
    { name: 'Chinese', flag: 'assets/flags/chinese.png' },
    { name: 'Turkish', flag: 'assets/flags/tuerk.png' },
  ];

  // Search term, filtered list, and selected language
  searchTerm: string = '';
  filteredLanguages: { name: string; flag: string }[] = [];
  selectedLanguage: string = 'English'; // Default language

  constructor(private translate: TranslateService, private router: Router, public platform: Platform) {
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

  ionViewWillEnter() {
    const lastPageType = sessionStorage.getItem('lastPageType');

    if (lastPageType === 'vocabulary') {
      sessionStorage.removeItem('lastPageType'); // Prevent infinite reload
      location.reload();
    }

    // Make sure language persists across reloads
    const storedLang = localStorage.getItem('selectedLanguage');
    if (storedLang) {
      this.selectedLanguage = storedLang;
      this.translate.use(storedLang);
    }

    console.log('Selected Language:', this.selectedLanguage);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.selectedLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
  }

  filterLanguages(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredLanguages = this.languages.filter(language =>
      language.name.toLowerCase().includes(term)
    );
  }

  clickToIntroduction() {
    const chapterno = '1';
    this.router.navigate(['/tabs/introduction'], { queryParams: { chapterno } });
  }

  clickToSentence() {
    const chapterno = '1';
    this.router.navigate(['/tabs/sentence'], { queryParams: { chapterno } });
  }

  clickToVocabulary() {
    sessionStorage.setItem('lastPageType', 'chapter'); // Store that we are coming from 'chapter'
    const chapterno = '1';
    this.router.navigate(['/tabs/vocabulary'], { queryParams: { chapterno } });
  }

  clickToVideo() {
    const chapterno = '1';
    this.router.navigate(['/tabs/video'], { queryParams: { chapterno } });
  }
}
