import { Injectable } from '@angular/core';
import { Person } from '../model/person.model'

@Injectable(
//   {
//   providedIn: 'root' // shared with all components
// }
)
export class PeopleService {

  people: Person[];

  constructor() {
    this.people = [
      new Person('John', 'Lennon', 40, false),
      new Person('Paul', 'McCartney', 79, true),
      new Person('George', 'Harrison', 59, false),
      new Person('Richard', 'Starkley', 80, true),
    ]
   }

   getAll() {
     return this.people;
   }

   create(newPerson: Person) {
     this.people.push(newPerson);
   }

   actives(): Promise<Person[]> {
    const promise = new Promise<Person[]>((resolve, reject) => {
      const tempArr = [];
      for (let person of this.people) {
        if (person.active) {
          tempArr.push(person);
        }
      }
      resolve(tempArr);
    });
    return promise
   }

   activesV2(): Promise<Person[]> {
    return new Promise<Person[]>((resolve, reject) => {
      resolve(this.people.filter(person => person.active));
    });    
   }
}
