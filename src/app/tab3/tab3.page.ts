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
  takenTest = 0;

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
    this.getTakenTestsCount();
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
    const currentQuestion = this.qList[this.currentQuestionIndex];
    currentQuestion.selectedOption = this.selectedOption;
    currentQuestion.isCorrect = this.selectedOption === currentQuestion.correctAnswer;
    this.answerChecked = true;
    this.isCorrect = currentQuestion.isCorrect;
    console.log(`Question ${this.currentQuestionIndex + 1}:`, currentQuestion);
  }

  
  nextQ() {
    const passed = this.qList.filter(q => q.isCorrect).length;
    console.log("pass = " + passed);
    const failed = this.qList.filter(q => !q.isCorrect && q.selectedOption).length;
     console.log("fail = " + failed);
    const notFinished = this.qList.length - (passed + failed);
     console.log("notfinish = " + notFinished);
  
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

   // Save the latest test results
  localStorage.setItem('latestTestResults', JSON.stringify(testResults));

  // Update the list of taken tests
  const existingTests = JSON.parse(localStorage.getItem('takenTests') || '[]');
  existingTests.push(testResults);
  localStorage.setItem('takenTests', JSON.stringify(existingTests));

  // Dispatch events with unique variable names
  const testResultsEvent = new CustomEvent('testResultsUpdated', { detail: testResults });
  window.dispatchEvent(testResultsEvent);

  const takenTestsEvent = new CustomEvent('takenTestsUpdated', { detail: existingTests });
  window.dispatchEvent(takenTestsEvent);
  
  this.getTakenTestsCount();
  console.log('Test Results Saved:', testResults);
  console.log('All Taken Tests:', existingTests);


  }

  getTakenTestsCount() {
  const existingTests = JSON.parse(localStorage.getItem('takenTests') || '[]');
  this.takenTest = existingTests.length;
}


  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.selectedLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
  }

  filterLanguages(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredLanguages = this.languages.filter((language) =>
      language.name.toLowerCase().includes(term) ||
      language.origin_name.toLowerCase().includes(term)
    );
  }

}
