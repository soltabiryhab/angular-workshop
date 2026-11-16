import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  count = 2;
  show = false;
  messages = ['Nouvelle conférence : Angular 21 Conference', 'Rappel : Signals Workshop le 30/11/2027'];

  toggle() {
    this.show = !this.show;
  }
}