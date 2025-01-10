import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    const storedLanguage = localStorage.getItem('selectedLanguage') || 'English';
    this.translate.setDefaultLang(storedLanguage);
    this.translate.use(storedLanguage);
  }
  
}
