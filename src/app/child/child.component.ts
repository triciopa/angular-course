import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  parProp: any;
  classProp: string[];
  selectedClass: string;
  showP: boolean;
  people: any[];
  optionNumber: number;

  constructor() {
    this.parProp = {
      color: 'dodgerblue',
      fontSize: '24px'
    }

    this.classProp = [];
    this.classProp.push('back');
    this.classProp.push('transform');

    this.selectedClass = '';

    this.showP = false;

    this.people = [
      { fname: 'John', lname: 'Bonachon', age: 37, address: 'Rivadavia 4900 PB A', phone: '+5491136363636'},
      { fname: 'Mary', lname: 'Jane', age: 12, address: 'Scalabritney Ortiz 2011', phone: '+5491112121212'},
      { fname: 'Paul', lname: 'Bazo', age: 88, address: 'Malabia 99 4to C', phone: '+5491188888888'},
      { fname: 'Charles', lname: 'Chaplin', age: 24, address: 'Hidalgo 1024', phone: '+5491124242424'},
      { fname: 'George', lname: 'Harrison', age: 49, address: 'Av. Libertador 992 17mo F', phone: '+5491149494949'}
    ];

    this.optionNumber = 1;
   }

  ngOnInit(): void {
  }

  changeColor(pColor: string) {
    switch (pColor) {
      case 'g':
        this.parProp.color = 'green';
        break;
      case 'o':
        this.parProp.color = 'orange';
        break;
      case 'p':
        this.parProp.color = 'purple';
        break;      
    }
  }

  changeClass(pClass: string) {
    switch (pClass) {
      case 'back':
        if (this.classProp.includes('back')) {
          let index = this.classProp.indexOf('back');
          this.classProp.splice(index, 1);
        } else {
          this.classProp.push('back');
        }
        this.selectedClass = 'back';
        break;
      case 'transform':        
      if (this.classProp.includes('transform')) {
        let index = this.classProp.indexOf('transform');
        this.classProp.splice(index, 1);
      } else {
        this.classProp.push('transform');
      }
      this.selectedClass = 'transform';
        break;
      case 'border':        
      if (this.classProp.includes('border')) {
        let index = this.classProp.indexOf('border');
        this.classProp.splice(index, 1);
      } else {
        this.classProp.push('border');
      }
      this.selectedClass = 'border';
        break;      
    }
  }

  onRange($event: any) {
    this.parProp.fontSize = `${$event.target.value}px`
  }

  showText() {
    
    this.showP = !this.showP;
  
  }
}
