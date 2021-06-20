import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  // @Input() message: string; // this would catch the name of the variable for attribute
  @Input('text') message: string;
  @Input() subtitle: string;

  @Output() pulsedAlert: EventEmitter<string>;
    
  constructor() { 
    this.message = 'Default message';
    this.subtitle = 'Default subtitle';

    this.pulsedAlert = new EventEmitter();
  }

  ngOnInit(): void {
    // this.message = 'Default message';
  }

  onClick() {
    this.pulsedAlert.emit('Alert has been pulsed');
  }

}
