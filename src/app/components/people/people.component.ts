import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person.model';
import { PeopleService } from "../../services/people.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  providers: [PeopleService]
})
export class PeopleComponent implements OnInit {

  people: Person[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.people = this.peopleService.getAll();    
  }

  onClick() {
    this.peopleService.create(new Person('George', 'Martin',90,false))
  }

  async onClickActives() {
    // this.peopleService.actives()
    //   .then(arr => console.log(arr))
    //   .catch(error => console.log(error))
    try {
      this.people = await this.peopleService.activesV2();
    } catch (error) {
      console.log(error)
    }
  }
}
