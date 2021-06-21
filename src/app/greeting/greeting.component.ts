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
  mainText: string;

  constructor() {
    this.message = 'Hello everybody';
    this.paragraph = 'mainParagraph';
    this.inputId = 'text';
    this.mainText = 'Initial Text';


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
    let count = 0;
    setInterval(() => {
      count <= 3
      ? this.mainText = `Text  ${count++}`
      : null;
    }, 2000)
  }

}
