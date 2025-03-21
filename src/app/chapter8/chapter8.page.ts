import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-chapter8',
  templateUrl: './chapter8.page.html',
  styleUrls: ['./chapter8.page.scss'],
})
export class Chapter8Page implements OnInit {

  // List of languages with their flags
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

  // Search term, filtered list, and selected language
  searchTerm: string = '';
  filteredLanguages: { name: string; flag: string }[] = [];
  selectedLanguage: string = 'English'; // Default language

  constructor(private translate: TranslateService, private router: Router) {
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

  ngOnInit(): void {
    // Initialize the filtered list with all languages
    this.filteredLanguages = [...this.languages];
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

  // Filter languages based on the search term
  filterLanguages(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredLanguages = this.languages.filter((language) =>
      language.name.toLowerCase().includes(term)
    );
  }

  clickToIntroduction() {
    const chapterno = '8';
    this.router.navigate(['/tabs/introduction'], { queryParams: { chapterno } });
  }

  clickToSentence() {
    const chapterno = '8';
    this.router.navigate(['/tabs/sentence'], { queryParams: { chapterno } });
  }

  clickToVocabulary() {
    const chapterno = '8';
    this.router.navigate(['/tabs/vocabulary'], { queryParams: { chapterno } });
  }

   clickToVideo() {
    const chapterno = '8';
    this.router.navigate(['/tabs/video'], { queryParams: { chapterno } });
  }

}
