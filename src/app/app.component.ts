import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Platform } from '@ionic/angular';
import { Location } from '@angular/common';
import { App } from '@capacitor/app'; // Import Capacitor App API
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  chapterno: string = '1'; 

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private platform: Platform,
    private location: Location,
    private translate: TranslateService
  ) {
   
    const storedLanguage = localStorage.getItem('selectedLanguage') || 'English';
    this.translate.setDefaultLang(storedLanguage);
    this.translate.use(storedLanguage);
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.chapterno = params['chapterno'] || sessionStorage.getItem('chapterno') || '1';
    });

    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(10, () => {
        if (this.location.isCurrentPathEqualTo('/tabs/tab1')) {
          App.exitApp(); 
        } else if (this.location.isCurrentPathEqualTo('/tabs/vocabulary')) {
          sessionStorage.setItem('lastPageType', 'vocabulary');
          this.router.navigate([`/tabs/chapter${this.chapterno}`]).then(() => {
            location.reload();
          });
        } else if (this.location.isCurrentPathEqualTo('/tabs/sentence')) {
          sessionStorage.setItem('lastPageType', 'sentence');
          this.router.navigate([`/tabs/chapter${this.chapterno}`]).then(() => {
            location.reload();
          });
        } else {
          this.location.back();
        }
      });
    });
  }
}
