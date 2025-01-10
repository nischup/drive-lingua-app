import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.page.html',
  styleUrls: ['./chapter.page.scss'],
})
export class ChapterPage implements OnInit {

  chapterId: number = 0; // Default initialization
  showDropdown: boolean = false;
  selectedLanguage: string = 'en'; // Default selected language

  constructor(private route: ActivatedRoute,private router: Router, private translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
  
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang && browserLang.match(/en|es/) ? browserLang : 'en');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.selectedLanguage = lang;
    this.showDropdown = false;
  }

  ilteredLanguages: { name: string; flag: string }[] = [];
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.chapterId = +id; // Safely assign the parameter value
    }
  }

  clickToIntroduction() {
    this.router.navigate(['/tabs/introduction']);
  }

  clickToSentence() {
    this.router.navigate(['/tabs/sentence']);
  }

  clickToVocabulary() {
    this.router.navigate(['/tabs/vocabulary']);
  }

  clickToVideo() {
    this.router.navigate(['/tabs/video']);
  }
}
