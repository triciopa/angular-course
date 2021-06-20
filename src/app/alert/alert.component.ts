import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  // @Input() message: string; // this would catch the name of the variable for attribute
  @Input('text') message: string;
  @Input() subtitle: string;
  

  constructor() { 
    this.message = 'Default message';
    this.subtitle = 'Default subtitle'
  }

  ngOnInit(): void {
    // this.message = 'Default message';
  }

}
