import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-chapter5',
  templateUrl: './chapter5.page.html',
  styleUrls: ['./chapter5.page.scss'],
})
export class Chapter5Page implements OnInit {

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

  constructor(private translate: TranslateService, private router:Router) {
    translate.addLangs(['English', 'Arabic','Persian','Ukrain','Vietnam','Albanian','French','Spanish','Russian','Chinese','Tuerk']);
    translate.setDefaultLang('English');
  
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang && browserLang.match(/English|Arabic|Iran|Ukrain|Vietnam|Albanian|French|Spanish|Russian|Chinese|Tuerk/) ? browserLang : 'English');
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
    const chapterno = '5';
    this.router.navigate(['/tabs/introduction'], { queryParams: { chapterno } });
  }

  clickToSentence() {
    const chapterno = '5';
    this.router.navigate(['/tabs/sentence'], { queryParams: { chapterno } });
  }

  clickToVocabulary() {
    const chapterno = '5';
    this.router.navigate(['/tabs/vocabulary'], { queryParams: { chapterno } });
  }

  clickToVideo() {
    this.router.navigate(['/tabs/video']);
  }

}
