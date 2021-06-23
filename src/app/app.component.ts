import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  titles: string[];
  textField : string;
  person: any;

  constructor(private router: Router) {
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

  onLink(pRoute: string) {    
    this.router.navigate([pRoute])
  }
}
