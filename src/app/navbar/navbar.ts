import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  links = ['Accueil', 'Profil', 'Conférences', 'Amis', 'Notifications', 'Admin'];
  active = 'Accueil';

  select(link: string) {
    this.active = link;
  }
}