import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  totalChapters = 10;
  completedChapters = 0;
  progressPercentage = 0;
  testResults: any = null;

  languages = [
    { name: 'English', origin_name: 'English', flag: 'assets/flags/english.png' },
    { name: 'Arabic', origin_name: 'العربية', flag: 'assets/flags/arabic.png' },
    { name: 'Persian', origin_name: 'فارسی', flag: 'assets/flags/iran.png' },
    { name: 'Ukrain', origin_name: 'Українська', flag: 'assets/flags/ukrain.png' },
    { name: 'Vietnam', origin_name: 'Tiếng Việt', flag: 'assets/flags/vietnam.png' },
    { name: 'Albanian', origin_name: 'Shqip', flag: 'assets/flags/albanian.png' },
    { name: 'French', origin_name: 'Français', flag: 'assets/flags/german.png' },
    { name: 'Spanish', origin_name: 'Español', flag: 'assets/flags/spanish.jpg' },
    { name: 'Russian', origin_name: 'Русский', flag: 'assets/flags/russian.jpg' },
    { name: 'Chinese', origin_name: '中文', flag: 'assets/flags/chinese.png' },
    { name: 'Tuerk', origin_name: 'Türkçe', flag: 'assets/flags/tuerk.png' },
  ];

  // Search term, filtered list, and selected language
  searchTerm: string = '';
  filteredLanguages: { name: string; origin_name: string; flag: string }[] = [];
  selectedLanguage: string = 'English'; // Default language

  constructor(private translate: TranslateService, private router: Router) {
    translate.addLangs(['English', 'Arabic', 'Persian', 'Ukrain', 'Vietnam', 'Albanian', 'French', 'Spanish', 'Russian', 'Chinese', 'Tuerk']);
    translate.setDefaultLang('English');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang && browserLang.match(/English|Arabic|Persian|Ukrain|Vietnam|Albanian|French|Spanish|Russian|Chinese|Tuerk/) ? browserLang : 'English');

    this.loadProgress(); 
    this.loadTestResults();

    window.addEventListener('testResultsUpdated', this.updateTestResults.bind(this));
    window.addEventListener('storage', () => {
      this.loadProgress();
    });

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

  ngOnDestroy() {
    window.removeEventListener('testResultsUpdated', this.updateTestResults.bind(this));
  }

  loadTestResults() {
    const results = localStorage.getItem('latestTestResults');
    if (results) {
      this.testResults = JSON.parse(results);
    }
  }

  updateTestResults(event: any) {
    this.testResults = event.detail;
  }

  loadProgress() {
    this.completedChapters = Number(localStorage.getItem('completedChapters')) || 0;
    this.calculateProgress();
  }

  calculateProgress() {
    this.progressPercentage = (this.completedChapters / (this.totalChapters * 10)) * 100;
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
      language.name.toLowerCase().includes(term) ||
      language.origin_name.toLowerCase().includes(term)
    );
  }


  updateProgress(newCompletedChapters: number) {
    this.completedChapters = newCompletedChapters;
    this.progressPercentage = (this.completedChapters / this.totalChapters) * 100;
  }
  
  clickTo(){
    this.router.navigate(['/tabs/tab2']);
  }

  clickToTest(){
    this.router.navigate(['/tabs/tab3']);
  }

}
