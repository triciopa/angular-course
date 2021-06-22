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

  constructor() {
    this.parProp = {
      color: 'dodgerblue',
      fontSize: '24px'
    }

    this.classProp = [];
    this.classProp.push('back');
    this.classProp.push('transform');

    this.selectedClass = '';
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
  

}
