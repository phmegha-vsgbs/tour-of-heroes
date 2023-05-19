import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Megha ' },
      { id: 13, name: 'Rupesh arun' },
      { id: 14, name: 'kala' },
      { id: 15, name: 'viji gunda' },
      { id: 16, name: 'karthik kriti' },
      { id: 17, name: 'arun' },
      { id: 18, name: 'madhurya' },
      { id: 19, name: 'srinivas' },
      { id: 20, name: 'rajeshwari' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
