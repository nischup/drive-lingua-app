import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage {
  constructor(private router: Router) {} 

  refreshNotifications() {
    console.log('Refreshing notifications...');
    this.router.navigate(['/tabs/tab4']);
  }
}
