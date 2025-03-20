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
  takenTestCount = 0;
  testCompleted: boolean = false; 
  testResult: string = ''; 

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
    
    this.translate.onLangChange.subscribe(() => {
      this.getAllQuestions(); // Reload questions when language changes
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
    this.getAllQuestions();
    this.getTakenTestsCount();
  }

  get currentQuestion() {
    return this.qList[this.currentQuestionIndex];
  }

  get totalQuestions() {
    return this.qList.length;
  }

// getAllQuestions() {
//   this.translate.get('questions').subscribe((translatedQuestions: any) => {
//     this.qList = this.shuffleArray(Object.values(translatedQuestions));
//     this.currentQuestionIndex = 0; 
//   });
// }


// private shuffleArray(array: any[]): any[] {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

getAllQuestions() {
  this.translate.get('questions').subscribe((translatedQuestions: any) => {
    const allQuestions = Object.values(translatedQuestions);
    this.qList = this.shuffleArray(allQuestions).slice(0, 20); 
    this.currentQuestionIndex = 0; 
  });
}

private shuffleArray(array: any[]): any[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


  checkAns() {
    const currentQuestion = this.qList[this.currentQuestionIndex];
    currentQuestion.selectedOption = this.selectedOption;
    currentQuestion.isCorrect = this.selectedOption === currentQuestion.correctAnswer;
    this.answerChecked = true;
    this.isCorrect = currentQuestion.isCorrect;
    if (this.currentQuestionIndex === this.totalQuestions - 1) {
      const passed = this.qList.filter(q => q.isCorrect).length;
      const failed = this.qList.filter(q => !q.isCorrect && q.selectedOption).length;
      const notFinished = this.qList.length - (passed + failed);
      const isPassed = passed >= 17;
        const previousResults = JSON.parse(localStorage.getItem('testSummary') || '{}');
        const passCount = previousResults.passCount || 0;
        const failCount = previousResults.failCount || 0;
        if (isPassed) {
            previousResults.passCount = passCount + 1;
        } else {
            previousResults.failCount = failCount + 1;
        }
        localStorage.setItem('testSummary', JSON.stringify(previousResults));
        const testSummaryEvent = new CustomEvent('testSummaryUpdated', { detail: previousResults });
        window.dispatchEvent(testSummaryEvent);
      this.saveTestResults(passed, failed, notFinished, isPassed);
      this.showTestResult(isPassed);
    }
  }


  nextQ() {
    if (this.currentQuestionIndex < this.totalQuestions - 1) {
      this.currentQuestionIndex++;
      this.selectedOption = null;
      this.answerChecked = false;
      this.isCorrect = false;
    } else {
      this.currentQuestionIndex = 0;
      this.selectedOption = null;
      this.answerChecked = false;
      this.isCorrect = false;
      // If you want to clear the previous answers for a fresh start
      this.qList.forEach(q => {
        q.selectedOption = null;
        q.isCorrect = false;
      });
      // this.router.navigate(['/tabs/tab1']);
    }
  }
  
  saveTestResults(passed: number, failed: number, notFinished: number, isPassed: boolean) {
    const testResults = {
      date: new Date().toLocaleDateString(),
      total: this.totalQuestions,
      passed,
      failed,
      notFinished,
      result: isPassed ? 'Passed' : 'Failed'
    };

    localStorage.setItem('latestTestResults', JSON.stringify(testResults));
    const existingTests = JSON.parse(localStorage.getItem('takenTests') || '[]');
    existingTests.push(testResults);
    localStorage.setItem('takenTests', JSON.stringify(existingTests));
    const takenTestCount = existingTests.length;
    localStorage.setItem('takenTestCount', takenTestCount.toString());

    setTimeout(() => {
      const takenTestCountEvent = new CustomEvent('takenTestCountUpdated', { detail: takenTestCount });
      window.dispatchEvent(takenTestCountEvent);
    }, 100); 

    const testResultsEvent = new CustomEvent('testResultsUpdated', { detail: testResults });
    window.dispatchEvent(testResultsEvent);

  }

  getTakenTestsCount() {
    const existingTests = JSON.parse(localStorage.getItem('takenTests') || '[]');
    this.takenTestCount = existingTests.length;
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

    showTestResult(isPassed: boolean) {
      this.testCompleted = true;
      this.testResult = isPassed ? '✅ Your Are Passed' : '❌ You Are Failed';

      setTimeout(() => {
          this.resetTest();
      }, 3000); // Show result for 3 seconds, then restart
  }


  resetTest() {
      this.qList = this.shuffleArray([...this.qList]);
      this.currentQuestionIndex = 0;  
      this.selectedOption = null;
      this.answerChecked = false;
      this.isCorrect = false;
      this.testCompleted = false;
      this.testResult = '';
      this.qList.forEach(q => {
          q.selectedOption = null;
          q.isCorrect = false;
      });
  }



}
