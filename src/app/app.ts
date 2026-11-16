import { Component } from '@angular/core';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { UserProfile } from './user-profile/user-profile';
import { FriendsList } from './friends-list/friends-list';
import { Notifications } from './notifications/notifications';
import { ConferenceList } from './conference-list/conference-list';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Navbar, UserProfile, FriendsList, Notifications, ConferenceList, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}