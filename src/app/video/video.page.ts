import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage {

  videoUrl: string = 'https://www.youtube.com/embed/uIF4GMnqG6w';
  sanitizedVideoUrl: SafeResourceUrl;
  defaultBackHref: string = '/tabs';

  constructor(private location: Location, private sanitizer: DomSanitizer) {
    this.sanitizedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

  goBack() {
    this.location.back(); // Navigate to the previous page in history
  }

}
