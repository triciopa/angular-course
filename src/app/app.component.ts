import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  titles: string[];

  constructor() {
    this.titles = ['Fight Club', 'Revolver', 'Walter Mitty'];
  }
}
