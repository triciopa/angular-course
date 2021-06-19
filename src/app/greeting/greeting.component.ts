import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  // template: '<h1>Component title: Greeting</h1>',
  templateUrl: './greeting.component.html',
  // styles: ['.class{property: value}h2{color: red}',]
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {

  message: string;
  paragraph: string;
  inputId: string;

  constructor() {
    this.message = 'Hello everybody';
    this.paragraph = 'mainParagraph';
    this.inputId = 'text';
    

    setTimeout(() => {
      this.message = 'Goodbye for now!';
      this.paragraph = 'changedParagraph';
      this.inputId = 'password';
    }, 3000);
   }

   showGreeting(): string {
     return 'Greeting from the method'
   }

  ngOnInit(): void {
  }

}
