import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-test-answer',
  templateUrl: './test-answer.page.html',
  styleUrls: ['./test-answer.page.scss'],
})
export class TestAnswerPage implements OnInit {

 selectedLanguage: string = 'en'; // Default language
  searchTerm: string = '';
  filteredLanguages: { name: string; flag: string }[] = [];

  constructor(private router: Router, private translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
  
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang && browserLang.match(/en|es/) ? browserLang : 'en');
    
  }

  languages = [
    { name: 'en', flag: 'assets/flags/english.png' },
    { name: 'es', flag: 'assets/flags/spanish.jpg' },
  ];

  ngOnInit(): void {
    this.filteredLanguages = [...this.languages];
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.selectedLanguage = lang;
  }

  // Filter languages based on the search term
  filterLanguages(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredLanguages = this.languages.filter((language) =>
      language.name.toLowerCase().includes(term)
    );
  }
  nextQ() {
      this.router.navigate(['/tabs/tab3']);
  }

}
