import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit, AfterViewInit  {

  @ViewChild('fileInput') fileInput!: ElementRef;
  // List of languages with their flags
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

  profile = {
    name: '',
    email: '',
    image: 'assets/flags/profile.jpg', 
  };

  constructor(private translate: TranslateService, private router: Router) {
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
    this.loadProfile();
  }
  ngAfterViewInit() {
    if (!this.fileInput) {
      console.error("fileInput not found");
    }
  }

  loadProfile() {
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      this.profile = JSON.parse(storedProfile);
    }
  }
  updateProfile() {
    localStorage.setItem('userProfile', JSON.stringify(this.profile));
    alert('Profile updated successfully!');
  }

  triggerFileInput() {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    } else {
      console.error("fileInput is not initialized yet.");
    }
  }

  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profile.image = e.target.result; 
        localStorage.setItem('userProfile', JSON.stringify(this.profile)); 
      };
      reader.readAsDataURL(file);
    }
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.selectedLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
  }

  // Filter languages based on the search term
  filterLanguages(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredLanguages = this.languages.filter((language) =>
      language.name.toLowerCase().includes(term) ||
      language.origin_name.toLowerCase().includes(term)
    );
  }

  openNotification() {
    console.log('Notification button clicked');
    // Add your logic here
  }

  openHelpAndSupport() {
    console.log('Help & Support button clicked');
    // Add your logic here
  }

  signOut() {
    this.router.navigate(['/language']);
    console.log('Sign Out button clicked');
    // Add your sign-out logic here
  }

}
