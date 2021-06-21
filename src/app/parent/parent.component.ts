import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  @Input() text: string;

  // LIFECYCLE
  constructor() {
    // 1    
    console.log("*** CONSTRUCTOR ***","\n","Initialize properties")
    console.log(`TEXT: ${this.text}`) // undefined
   }

   // 1.5 and after that, through every change
   ngOnChanges(changes: SimpleChange) { // automatically rendered & receives inputs
    console.log("*** ON CHANGES ***","\n","Initialize properties");
    console.log(`TEXT: ${this.text}`);
    // console.log(changes)
    console.log('Previous value: ',changes["text"].previousValue);
    console.log('Current value: ',changes["text"].currentValue);
   }

  ngOnInit(): void {
    // 2
    console.log("*** ON INIT ***","\n","Throw actions that start the component");
    console.log(`TEXT: ${this.text}`)
  }

  ngAfterViewInit() {
    // 3
    console.log("*** AFTER VIEW INIT ***","\n","Throw initial actions inside the view");
  }

  ngOnDestroy() {
    // 4  
    console.log("*** ON DESTROY ***","\n","Last stage of a component");
  }
}
