import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private language: string = 'English'; // Default language

  setLanguage(language: string) {
    this.language = language;
    localStorage.setItem('selectedLanguage', language); // Persist in localStorage
  }

  getLanguage(): string {
    return localStorage.getItem('selectedLanguage') || this.language;
  }
}
