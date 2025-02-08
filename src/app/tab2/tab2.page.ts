import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';


interface ImagePaths {
  registration: string;
  firstStep?: string;
  startDriving?: string;
  useStreet?: string;
  weTurn?: string;
  priority1?: string;
  priority2?: string;
  rules?: string;
  highway?: string;
  driving?: string;
  departure?: string;
  exam?: string;
}

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

  imagePaths: ImagePaths = { registration: '' };

  constructor(private languageService: LanguageService, private translate: TranslateService, private router: Router) {
    
      translate.addLangs(['English', 'Arabic', 'Persian', 'Ukrain', 'Vietnam', 'Albanian', 'French', 'Spanish', 'Russian', 'Chinese', 'Tuerk']);
    translate.setDefaultLang('English');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang && browserLang.match(/English|Arabic|Persian|Ukrain|Vietnam|Albanian|French|Spanish|Russian|Chinese|Tuerk/) ? browserLang : 'English');
  }

  ngOnInit(): void {
    this.filteredLanguages = [...this.languages];
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      this.switchLanguage(storedLanguage);
    } else {
      this.translate.setDefaultLang(this.selectedLanguage);
    }
    this.updateImagePath();
  }

  updateImagePath() {
    const languageMaps: { [key: string]: any } = {
      English: { 
        registration: 'english/english1.svg', 
        firstStep: 'english/english2.svg', 
        startDriving: 'english/english3.svg', 
        useStreet: 'english/english4.svg', 
        weTurn: 'english/english5.svg', 
        priority1: 'english/english6.svg', 
        priority2: 'english/english7.svg', 
        rules: 'english/english8.svg', 
        highway: 'english/english9.svg', 
        driving: 'english/english10.svg', 
        departure: 'english/english11.svg', 
        exam: 'english/english12.svg'
      },
      Arabic: { 
        registration: 'arabisch/arab1.svg',
        firstStep: 'arabisch/arab2.svg',
        startDriving: 'arabisch/arab3.svg', 
        useStreet: 'arabisch/arab4.svg', 
        weTurn: 'arabisch/arab5.svg', 
        priority1: 'arabisch/arab6.svg', 
        priority2: 'arabisch/arab7.svg', 
        rules: 'arabisch/arab8.svg', 
        highway: 'arabisch/arab9.svg', 
        driving: 'arabisch/arab10.svg', 
        departure: 'arabisch/arab11.svg', 
        exam: 'arabisch/arab12.svg'  
      },
      Persian: { 
        registration: 'ukrainisch/ukrain1.svg', 
        firstStep: 'persisch/pers2.svg', 
        startDriving: 'persisch/pers3.svg', 
        useStreet: 'persisch/pers4.svg', 
        weTurn: 'persisch/pers5.svg', 
        priority1: 'persisch/pers6.svg', 
        priority2: 'persisch/pers7.svg', 
        rules: 'persisch/pers8.svg', 
        highway: 'persisch/pers9.svg', 
        driving: 'persisch/pers10.svg', 
        departure: 'persisch/pers11.svg', 
        exam: 'persisch/pers12.svg' 
      },
      Ukrain: { 
        registration: 'ukrainisch/ukrain1.svg', 
        firstStep: 'ukrainisch/ukrain2.svg',
        startDriving: 'ukrainisch/ukrain3.svg', 
        useStreet: 'ukrainisch/ukrain4.svg', 
        weTurn: 'ukrainisch/ukrain5.svg', 
        priority1: 'ukrainisch/ukrain6.svg', 
        priority2: 'ukrainisch/ukrain7.svg', 
        rules: 'ukrainisch/ukrain8.svg', 
        highway: 'ukrainisch/ukrain9.svg', 
        driving: 'ukrainisch/ukrain10.svg', 
        departure: 'ukrainisch/ukrain11.svg', 
        exam: 'ukrainisch/ukrain12.svg'  
      },
      Vietnam: { 
        registration: 'vietnam/vietnam1.svg', 
        firstStep: 'vietnam/vietnam2.svg',
        startDriving: 'vietnam/vietnam3.svg', 
        useStreet: 'vietnam/vietnam4.svg', 
        weTurn: 'vietnam/vietnam5.svg', 
        priority1: 'vietnam/vietnam6.svg', 
        priority2: 'vietnam/vietnam7.svg', 
        rules: 'vietnam/vietnam8.svg', 
        highway: 'vietnam/vietnam9.svg', 
        driving: 'vietnam/vietnam10.svg', 
        departure: 'vietnam/vietnam11.svg', 
        exam: 'vietnam/vietnam12.svg'  
      },
      Albanian: { 
        registration: 'albanisch/alban1.svg', 
        firstStep: 'albanisch/alban2.svg',
        startDriving: 'albanisch/alban3.svg', 
        useStreet: 'albanisch/alban4.svg', 
        weTurn: 'albanisch/alban5.svg', 
        priority1: 'albanisch/alban6.svg', 
        priority2: 'albanisch/alban7.svg', 
        rules: 'albanisch/alban8.svg', 
        highway: 'albanisch/alban9.svg', 
        driving: 'albanisch/alban10.svg', 
        departure: 'albanisch/alban11.svg', 
        exam: 'albanisch/alban12.svg' 
      },
      French: { 
        registration: 'französisch/franz1.svg' ,
        firstStep: 'französisch/franz2.svg' ,
        startDriving: 'französisch/franz3.svg', 
        useStreet: 'französisch/franz4.svg', 
        weTurn: 'französisch/franz5.svg', 
        priority1: 'französisch/franz6.svg', 
        priority2: 'französisch/franz7.svg', 
        rules: 'französisch/franz8.svg', 
        highway: 'französisch/franz9.svg', 
        driving: 'französisch/franz10.svg', 
        departure: 'französisch/franz11.svg', 
        exam: 'französisch/franz12.svg'
      },
      Spanish: { 
        registration: 'spanisch/span1.svg' ,
        firstStep: 'spanisch/span2.svg' ,
        startDriving: 'spanisch/span3.svg', 
        useStreet: 'spanisch/span4.svg', 
        weTurn: 'spanisch/span5.svg', 
        priority1: 'spanisch/span6.svg', 
        priority2: 'spanisch/span7.svg', 
        rules: 'spanisch/span8.svg', 
        highway: 'spanisch/span9.svg', 
        driving: 'spanisch/span10.svg', 
        departure: 'spanisch/span11.svg', 
        exam: 'spanisch/span12.svg'
      },
      Russian: { 
        registration: 'russisch/russ1.svg' ,
        firstStep: 'russisch/russ2.svg' ,
        startDriving: 'russisch/russ3.svg', 
        useStreet: 'russisch/russ4.svg', 
        weTurn: 'russisch/russ5.svg', 
        priority1: 'russisch/russ6.svg', 
        priority2: 'russisch/russ7.svg', 
        rules: 'russisch/russ8.svg', 
        highway: 'russisch/russ9.svg', 
        driving: 'russisch/russ10.svg', 
        departure: 'russisch/russ11.svg', 
        exam: 'russisch/russ12.svg'
      },
      Chinese: { 
        registration: 'chinesisch/chines1.svg' ,
        firstStep: 'chinesisch/chines2.svg' ,
        startDriving: 'chinesisch/chines3.svg', 
        useStreet: 'chinesisch/chines4.svg', 
        weTurn: 'chinesisch/chines5.svg', 
        priority1: 'chinesisch/chines6.svg', 
        priority2: 'chinesisch/chines7.svg', 
        rules: 'chinesisch/chines8.svg', 
        highway: 'chinesisch/chines9.svg', 
        driving: 'chinesisch/chines10.svg', 
        departure: 'chinesisch/chines11.svg', 
        exam: 'chinesisch/chines12.svg'
      },
      Tuerk: { 
        registration: 'türkisch/tuerk1.svg', 
        firstStep: 'türkisch/tuerk2.svg',
        startDriving: 'türkisch/tuerk3.svg', 
        useStreet: 'türkisch/tuerk4.svg', 
        weTurn: 'türkisch/tuerk5.svg', 
        priority1: 'türkisch/tuerk6.svg', 
        priority2: 'türkisch/tuerk7.svg', 
        rules: 'türkisch/tuerk8.svg', 
        highway: 'türkisch/tuerk9.svg', 
        driving: 'türkisch/tuerk10.svg', 
        departure: 'türkisch/tuerk11.svg', 
        exam: 'türkisch/tuerk12.svg' 
      }
    };
  
    const selectedLangMap = languageMaps[this.selectedLanguage] || languageMaps['English'];
  
    this.imagePaths = {
      registration: `assets/iconschapterpage/${selectedLangMap.registration}`,
      firstStep: `assets/iconschapterpage/${selectedLangMap.firstStep}`,
      startDriving: `assets/iconschapterpage/${selectedLangMap.startDriving}`,
      useStreet: `assets/iconschapterpage/${selectedLangMap.useStreet}`,
      weTurn: `assets/iconschapterpage/${selectedLangMap.weTurn}`,
      priority1: `assets/iconschapterpage/${selectedLangMap.priority1}`,
      priority2: `assets/iconschapterpage/${selectedLangMap.priority2}`,
      rules: `assets/iconschapterpage/${selectedLangMap.rules}`,
      highway: `assets/iconschapterpage/${selectedLangMap.highway}`,
      driving: `assets/iconschapterpage/${selectedLangMap.driving}`,
      departure: `assets/iconschapterpage/${selectedLangMap.departure}`,
      exam: `assets/iconschapterpage/${selectedLangMap.exam}`,
    };
  }
  
  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.selectedLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    this.updateImagePath();
  }

  filterLanguages(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredLanguages = this.languages.filter((language) =>
      language.name.toLowerCase().includes(term) ||
      language.origin_name.toLowerCase().includes(term)
    );
  }

  navigateToRegistration() {
    this.router.navigate(['/tabs/registration-info']);
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
