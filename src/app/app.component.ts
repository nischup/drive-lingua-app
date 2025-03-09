import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Platform } from '@ionic/angular';
import { Location } from '@angular/common';
import { App } from '@capacitor/app'; // Import Capacitor App API

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private location: Location,
    private translate: TranslateService
  ) {
    const storedLanguage = localStorage.getItem('selectedLanguage') || 'English';
    this.translate.setDefaultLang(storedLanguage);
    this.translate.use(storedLanguage);

    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(10, () => {
        if (this.location.isCurrentPathEqualTo('/tabs/tab1')) {
          App.exitApp(); 
        } else {
          this.location.back(); 
        }
      });
    });
  }
}
