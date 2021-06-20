import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  message: string;

  constructor() {
    this.message = 'This is the initial message';
   }

  ngOnInit(): void {
  }

  onClick($event) {
    console.log($event)
  }

  onChange($event) {
    console.log($event.target.value)
  }

  onMouseEnter() {
    // console.log('Entered')
    this.message = `I'm in`;
  }

  onMouseOut() {
    this.message = `I'm out`;
  }

  onChangeInput($event) {
    console.log($event.target.value)
  }

  onInput($event) {
    this.message = $event.target.value
  }

  onFocus() {
    console.log('On focus')
  }
   
  onBlur() {
    console.log('Out of focus')
  }
};
