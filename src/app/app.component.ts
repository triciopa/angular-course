import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  titles: string[];

  textField : string;

  person: any;

  constructor() {
    this.titles = ['Fight Club', 'Revolver', 'Walter Mitty'];
    this.textField = 'Start text'
    this.person = {};
  }

  onPulsedAlert($event) {
    console.log($event);
  }

  onClick() {
    this.textField = 'Changed text'
  }
}
