import { Component } from '@angular/core';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../models/conference';

@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, NgClass, UpperCasePipe, DatePipe],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  searchTerm = '';

  conferences: Conference[] = [
    { id: 1, title: 'Angular 21 Conference', description: 'Les nouveautés d’Angular 21.',
      date: '2027-11-15', place: 'Tunis', maxParticipants: 100, nbParticipants: 75 },
    { id: 2, title: 'Signals Workshop', description: 'Atelier pratique sur les Signals Angular.',
      date: '2027-11-30', place: 'Ariana', maxParticipants: 50, nbParticipants: 44 },
    { id: 3, title: 'Web Conference', description: 'Les tendances du web moderne.',
      date: '2027-11-20', place: 'Sousse', maxParticipants: 40, nbParticipants: 40 },
  ];

  get upcoming(): Conference[] {
    const today = new Date();
    const term = this.searchTerm.trim().toLowerCase();
    return this.conferences.filter(
      (c) => new Date(c.date) >= today && c.title.toLowerCase().includes(term)
    );
  }

  register(c: Conference) {
    if (c.nbParticipants < c.maxParticipants) {
      c.nbParticipants++;
    }
  }
}