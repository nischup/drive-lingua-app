import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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

 imagePath: string = 'assets/iconschapterpage/english/english1.svg'; // Default image path

  constructor(private languageService: LanguageService, private translate: TranslateService, private router: Router) {
    translate.addLangs(['English', 'Arabic', 'Persian', 'Ukrain', 'Vietnam', 'Albanian', 'French', 'Spanish', 'Russian', 'Chinese', 'Tuerk']);
    translate.setDefaultLang('English');

    const browserLang = translate.getBrowserLang();
    const defaultLang = browserLang && browserLang.match(/English|Arabic|Persian|Ukrain|Vietnam|Albanian|French|Spanish|Russian|Chinese|Tuerk/) 
      ? browserLang 
      : 'English';

    this.selectedLanguage = defaultLang;
    translate.use(defaultLang);
    this.updateImagePath();
  }

  updateImagePath() {
    // Map language to its folder and file names
    const languageMap: { [key: string]: string } = {
      English: 'english/english1.svg',
      Arabic: 'arabisch/arab1.svg',
      Persian: 'persisch/pers1.svg',
      // Add mappings for other languages as needed
    };

    this.imagePath = `assets/iconschapterpage/${languageMap[this.selectedLanguage] || 'english/english1.svg'}`;
     console.log(this.imagePath);
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

    this.languageService.setLanguage(lang); // Save the selected language

    // this.translate.use(lang);
    // this.selectedLanguage = lang;
    // localStorage.setItem('selectedLanguage', lang);
    // this.updateImagePath();
    // this.languageService.setLanguage(language); // Save the selected language
  }

  // Filter languages based on the search term
  filterLanguages(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredLanguages = this.languages.filter((language) =>
      language.name.toLowerCase().includes(term) ||
      language.origin_name.toLowerCase().includes(term)
    );
  }

  navigateToRegistration() {
    this.router.navigate(['/register']);
  }

  navigateToChapter(id: number) {
    this.router.navigate([`/tabs/chapter/${id}`]);
  }

  navigateToChapter1() {
    this.router.navigate(['/tabs/chapter1/']);
  }
  navigateToChapter2() {
    this.router.navigate(['/tabs/chapter2/']);
  }
  navigateToChapter3() {
    this.router.navigate(['/tabs/chapter3/']);
  }
  navigateToChapter4() {
    this.router.navigate(['/tabs/chapter4/']);
  }
  navigateToChapter5() {
    this.router.navigate(['/tabs/chapter5/']);
  }
  navigateToChapter6() {
    this.router.navigate(['/tabs/chapter6/']);
  }
  navigateToChapter7() {
    this.router.navigate(['/tabs/chapter7/']);
  }
  navigateToChapter8() {
    this.router.navigate(['/tabs/chapter8/']);
  }
  navigateToChapter9() {
    this.router.navigate(['/tabs/chapter9/']);
  }
  navigateToChapter10() {
    this.router.navigate(['/tabs/chapter10/']);
  }  

  navigateToExam() {
    this.router.navigate(['/tabs/beforeexam/']);
  }


  

  

}
