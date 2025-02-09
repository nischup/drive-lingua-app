import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  qList: any[] = [];
  currentQuestionIndex: number = 0;
  selectedOption: string | null = null;
  answerChecked: boolean = false;  
  isCorrect: boolean = false;  

  searchTerm: string = '';
  filteredLanguages: { name: string; origin_name: string; flag: string }[] = [];
  selectedLanguage: string = 'English'; // Default language

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

  constructor(private translate: TranslateService, private router: Router) {
    translate.addLangs(['English', 'Arabic', 'Persian', 'Ukrain', 'Vietnam', 'Albanian', 'French', 'Spanish', 'Russian', 'Chinese', 'Tuerk']);
    translate.setDefaultLang('English');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang && browserLang.match(/English|Arabic|Persian|Ukrain|Vietnam|Albanian|French|Spanish|Russian|Chinese|Tuerk/) ? browserLang : 'English');
    // this.getAllQuestions();
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
    this.getAllQuestions();
  }

  get currentQuestion() {
    return this.qList[this.currentQuestionIndex];
  }
  get totalQuestions() {
    return this.qList.length;
  }

  getAllQuestions() {
    this.translate.get('questions').subscribe((translatedQuestions: any) => {
      this.qList = Object.values(translatedQuestions);
    });
  }
  checkAns() {
    this.answerChecked = true;
    this.isCorrect = this.selectedOption === this.currentQuestion.correctAnswer;
  }
  
  nextQ() {
    const passed = this.qList.filter(q => q.isCorrect).length;
    const failed = this.qList.filter(q => !q.isCorrect && q.selectedOption).length;
    const notFinished = this.qList.length - (passed + failed);
  
    if (this.currentQuestionIndex < this.totalQuestions - 1) {
      this.currentQuestionIndex++;
      this.selectedOption = null;
      this.answerChecked = false;
      this.isCorrect = false;
    } else {
      this.saveTestResults(passed, failed, notFinished);
    }
  }
  
  


  saveTestResults(passed: number, failed: number, notFinished: number) {
    const testResults = {
      date: new Date().toLocaleDateString(),
      total: this.totalQuestions,
      passed,
      failed,
      notFinished
    };
    localStorage.setItem('latestTestResults', JSON.stringify(testResults));
    const event = new CustomEvent('testResultsUpdated', { detail: testResults });
    window.dispatchEvent(event);
    console.log('Test Results Saved:', testResults);
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


}
