import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage {

  videoUrl: string = 'https://www.youtube.com/embed/L8m7xSeCSp0';
  videoUrlchap31: string = 'https://www.youtube.com/embed/c-52wXAzols';
  videoUrlchap32: string = 'https://www.youtube.com/embed/X5dtfLzkjGI';
  videoUrlchap33: string = 'https://www.youtube.com/embed/-fc01eUxGtU';
  videoUrlchap34: string = 'https://www.youtube.com/embed/bl1l3vnfR9Y';
  videoUrlchap35: string = 'https://www.youtube.com/embed/MfT05HZL03c';
  videoUrlchap36: string = 'https://www.youtube.com/embed/_2RSRWqlhgM';
  videoUrlchap37: string = 'https://www.youtube.com/embed/zYRxnGlr6HM';
  videoUrlchap38: string = 'https://www.youtube.com/embed/H7uu9lcgV5k';

  videoUrlchap41: string = 'https://www.youtube.com/embed/jBxJygIqypw';
  videoUrlchap42: string = 'https://www.youtube.com/embed/2DTq9y-b-pw';
  videoUrlchap43: string = 'https://www.youtube.com/embed/qM4i6DA24t8';
  videoUrlchap44: string = 'https://www.youtube.com/embed/2kcKkYe0bdc';
  videoUrlchap45: string = 'https://www.youtube.com/embed/I6S9FE__Ofw';

  videoUrlchap51: string = 'https://www.youtube.com/embed/hBrUwjQ7IOE';
  videoUrlchap52: string = 'https://www.youtube.com/embed/Mrvg0kRWOvc';
  videoUrlchap53: string = 'https://www.youtube.com/embed/BAFLxuL5ruc';
  videoUrlchap54: string = 'https://www.youtube.com/embed/sMsBHrwqZBk';
  videoUrlchap55: string = 'https://www.youtube.com/embed/W5DY-W4971s';
  videoUrlchap56: string = 'https://www.youtube.com/embed/WMIGHBkKYXY';
  videoUrlchap57: string = 'https://www.youtube.com/embed/_gpWGIeKoJI';
  videoUrlchap58: string = 'https://www.youtube.com/embed/T6U7qnK4jNE';

  videoUrlchap61: string = 'https://www.youtube.com/embed/I0wBk9LGU_k';
  videoUrlchap62: string = 'https://www.youtube.com/embed/9m6PyOY_0uo';
  videoUrlchap63: string = 'https://www.youtube.com/embed/8Qgs6aBQoTw';
  videoUrlchap64: string = 'https://www.youtube.com/embed/U7Ar7X3YgxU';
  videoUrlchap65: string = 'https://www.youtube.com/embed/-d16igOD8AA';
  videoUrlchap66: string = 'https://www.youtube.com/embed/re5H_G4RNFg';
  videoUrlchap67: string = 'https://www.youtube.com/embed/CK5r43Jp22M';
  videoUrlchap68: string = 'https://www.youtube.com/embed/RGozZma3RA4';

  videoUrlchap71: string = 'https://www.youtube.com/embed/2PsNYWbeQV0';
  videoUrlchap72: string = 'https://www.youtube.com/embed/KmVpdGsRteA';
  videoUrlchap73: string = 'https://www.youtube.com/embed/MenYR4rCTyg';
  videoUrlchap74: string = 'https://www.youtube.com/embed/pQSHO8z_s_s';
  videoUrlchap75: string = 'https://www.youtube.com/embed/bzjuvON3KY0';


  videoUrlchap81: string = 'https://www.youtube.com/embed/kwERoMa7g0M';
  videoUrlchap82: string = 'https://www.youtube.com/embed/lDLhUD1o-cI';
  videoUrlchap83: string = 'https://www.youtube.com/embed/9fCV91GXTmQ';
  videoUrlchap84: string = 'https://www.youtube.com/embed/2D6X0-MgVkM';
  videoUrlchap85: string = 'https://www.youtube.com/embed/0ReLJLDnkWo';
  videoUrlchap86: string = 'https://www.youtube.com/embed/SjjhaBNqULM';
  videoUrlchap87: string = 'https://www.youtube.com/embed/QlwquRT_dwo';
  videoUrlchap88: string = 'https://www.youtube.com/embed/6OFq0fpKl48';

  videoUrlchap91: string = 'https://www.youtube.com/embed/aVSb880qF0c';
  videoUrlchap92: string = 'https://www.youtube.com/embed/vayS9EGJTL8';
  videoUrlchap93: string = 'https://www.youtube.com/embed/51r2T6Rx5w8';
  videoUrlchap94: string = 'https://www.youtube.com/embed/PvGEQK0OXnE';
  videoUrlchap95: string = 'https://www.youtube.com/embed/2QMg0ZIRoPY';
  videoUrlchap96: string = 'https://www.youtube.com/embed/n_YGQ4b_oRQ';
  videoUrlchap97: string = 'https://www.youtube.com/embed/ySksOrnzs-4';

  videoUrlchap101: string = 'https://www.youtube.com/embed/9cj798bKJAU';


  sanitizedVideoUrl: SafeResourceUrl;
  sanitizedVideoUrlChap3_1: SafeResourceUrl;
  sanitizedVideoUrlChap3_2: SafeResourceUrl;
  sanitizedVideoUrlChap3_3: SafeResourceUrl;
  sanitizedVideoUrlChap3_4: SafeResourceUrl;
  sanitizedVideoUrlChap3_5: SafeResourceUrl;
  sanitizedVideoUrlChap3_6: SafeResourceUrl;
  sanitizedVideoUrlChap3_7: SafeResourceUrl;
  sanitizedVideoUrlChap3_8: SafeResourceUrl;

  sanitizedVideoUrlChap4_1: SafeResourceUrl;
  sanitizedVideoUrlChap4_2: SafeResourceUrl;
  sanitizedVideoUrlChap4_3: SafeResourceUrl;
  sanitizedVideoUrlChap4_4: SafeResourceUrl;
  sanitizedVideoUrlChap4_5: SafeResourceUrl;

  sanitizedVideoUrlChap5_1: SafeResourceUrl;
  sanitizedVideoUrlChap5_2: SafeResourceUrl;
  sanitizedVideoUrlChap5_3: SafeResourceUrl;
  sanitizedVideoUrlChap5_4: SafeResourceUrl;
  sanitizedVideoUrlChap5_5: SafeResourceUrl;
  sanitizedVideoUrlChap5_6: SafeResourceUrl;
  sanitizedVideoUrlChap5_7: SafeResourceUrl;
  sanitizedVideoUrlChap5_8: SafeResourceUrl;

  sanitizedVideoUrlChap6_1: SafeResourceUrl;
  sanitizedVideoUrlChap6_2: SafeResourceUrl;
  sanitizedVideoUrlChap6_3: SafeResourceUrl;
  sanitizedVideoUrlChap6_4: SafeResourceUrl;
  sanitizedVideoUrlChap6_5: SafeResourceUrl;
  sanitizedVideoUrlChap6_6: SafeResourceUrl;
  sanitizedVideoUrlChap6_7: SafeResourceUrl;
  sanitizedVideoUrlChap6_8: SafeResourceUrl;

  sanitizedVideoUrlChap7_1: SafeResourceUrl;
  sanitizedVideoUrlChap7_2: SafeResourceUrl;
  sanitizedVideoUrlChap7_3: SafeResourceUrl;
  sanitizedVideoUrlChap7_4: SafeResourceUrl;
  sanitizedVideoUrlChap7_5: SafeResourceUrl;


  sanitizedVideoUrlChap8_1: SafeResourceUrl;
  sanitizedVideoUrlChap8_2: SafeResourceUrl;
  sanitizedVideoUrlChap8_3: SafeResourceUrl;
  sanitizedVideoUrlChap8_4: SafeResourceUrl;
  sanitizedVideoUrlChap8_5: SafeResourceUrl;
  sanitizedVideoUrlChap8_6: SafeResourceUrl;
  sanitizedVideoUrlChap8_7: SafeResourceUrl;
  sanitizedVideoUrlChap8_8: SafeResourceUrl;  

  sanitizedVideoUrlChap9_1: SafeResourceUrl;
  sanitizedVideoUrlChap9_2: SafeResourceUrl;
  sanitizedVideoUrlChap9_3: SafeResourceUrl;
  sanitizedVideoUrlChap9_4: SafeResourceUrl;
  sanitizedVideoUrlChap9_5: SafeResourceUrl;
  sanitizedVideoUrlChap9_6: SafeResourceUrl;
  sanitizedVideoUrlChap9_7: SafeResourceUrl;

  sanitizedVideoUrlChap10_1: SafeResourceUrl;

  defaultBackHref: string = '/tabs';
  chapterno: string = '';
  textToDetails: string = '';
  filteredLanguages: { name: string; flag: string }[] = [];
  selectedLanguage: string = 'English'; 

  languages = [
    { name: 'English', flag: 'assets/flags/english.png' },
    { name: 'Arabic', flag: 'assets/flags/arabic.png' },
    { name: 'Persian', flag: 'assets/flags/iran.png' },
    { name: 'Ukrain', flag: 'assets/flags/ukrain.png' },
    { name: 'Vietnam', flag: 'assets/flags/vietnam.png' },
    { name: 'Albanian', flag: 'assets/flags/albanian.png' },
    { name: 'French', flag: 'assets/flags/french.png' },
    { name: 'Spanish', flag: 'assets/flags/spanish.jpg' },
    { name: 'Russian', flag: 'assets/flags/russian.jpg' },
    { name: 'Chinese', flag: 'assets/flags/chinese.png' },
    { name: 'Tuerk', flag: 'assets/flags/tuerk.png' },
  ];

  constructor(private router: Router, private languageService: LanguageService, private location: Location, private sanitizer: DomSanitizer, private translate: TranslateService, private route: ActivatedRoute) {
    this.sanitizedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
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
    
    this.sanitizedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    this.sanitizedVideoUrlChap3_1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap31);
    this.sanitizedVideoUrlChap3_2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap32);
    this.sanitizedVideoUrlChap3_3 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap33);
    this.sanitizedVideoUrlChap3_4 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap34);
    this.sanitizedVideoUrlChap3_5 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap35);
    this.sanitizedVideoUrlChap3_6 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap36);
    this.sanitizedVideoUrlChap3_7 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap37);
    this.sanitizedVideoUrlChap3_8 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap38);

    this.sanitizedVideoUrlChap4_1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap41);
    this.sanitizedVideoUrlChap4_2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap42);
    this.sanitizedVideoUrlChap4_3 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap43);
    this.sanitizedVideoUrlChap4_4 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap44);
    this.sanitizedVideoUrlChap4_5 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap45);

    this.sanitizedVideoUrlChap5_1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap51);
    this.sanitizedVideoUrlChap5_2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap52);
    this.sanitizedVideoUrlChap5_3 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap53);
    this.sanitizedVideoUrlChap5_4 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap54);
    this.sanitizedVideoUrlChap5_5 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap55);
    this.sanitizedVideoUrlChap5_6 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap56);
    this.sanitizedVideoUrlChap5_7 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap57);
    this.sanitizedVideoUrlChap5_8 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap58);

    this.sanitizedVideoUrlChap6_1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap61);
    this.sanitizedVideoUrlChap6_2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap62);
    this.sanitizedVideoUrlChap6_3 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap63);
    this.sanitizedVideoUrlChap6_4 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap64);
    this.sanitizedVideoUrlChap6_5 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap65);
    this.sanitizedVideoUrlChap6_6 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap66);
    this.sanitizedVideoUrlChap6_7 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap67);
    this.sanitizedVideoUrlChap6_8 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap68);

    this.sanitizedVideoUrlChap7_1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap71);
    this.sanitizedVideoUrlChap7_2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap72);
    this.sanitizedVideoUrlChap7_3 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap73);
    this.sanitizedVideoUrlChap7_4 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap74);
    this.sanitizedVideoUrlChap7_5 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap75);


    this.sanitizedVideoUrlChap8_1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap81);
    this.sanitizedVideoUrlChap8_2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap82);
    this.sanitizedVideoUrlChap8_3 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap83);
    this.sanitizedVideoUrlChap8_4 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap84);
    this.sanitizedVideoUrlChap8_5 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap85);
    this.sanitizedVideoUrlChap8_6 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap86);
    this.sanitizedVideoUrlChap8_7 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap87);
    this.sanitizedVideoUrlChap8_8 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap88);   

    this.sanitizedVideoUrlChap9_1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap91);
    this.sanitizedVideoUrlChap9_2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap92);
    this.sanitizedVideoUrlChap9_3 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap93);
    this.sanitizedVideoUrlChap9_4 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap94);
    this.sanitizedVideoUrlChap9_5 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap95);
    this.sanitizedVideoUrlChap9_6 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap96);
    this.sanitizedVideoUrlChap9_7 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap97);

    this.sanitizedVideoUrlChap10_1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlchap101);


  }

    ngOnInit() {
    // Access the 'chapterno' query parameter
    this.route.queryParams.subscribe((params) => {
      this.chapterno = params['chapterno'] || '1'; // Default to '1' if not found
      this.setBackHref(); // Set dynamic back link
    });
     this.selectedLanguage = this.languageService.getLanguage();
  }


  switchLanguage(language: string) {
    this.selectedLanguage = language;
    // Persist the selected language in localStorage
    localStorage.setItem('selectedLanguage', language);
  }

  setBackHref() {
    this.defaultBackHref = `/tabs/chapter${this.chapterno}`;
  }

  handleBackClick() {
    sessionStorage.setItem('lastPageType', 'vocabulary'); // Track last visited page
    this.router.navigate([`/tabs/chapter${this.chapterno}`]).then(() => {
      location.reload(); // Reload after navigating back
    });
  }

  goBack() {
    this.location.back(); // Navigate to the previous page in history
  }

}
