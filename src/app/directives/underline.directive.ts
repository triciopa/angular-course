import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[underline]' // this way it's used like HTML tag
  // selector: 'underline' // this way it's used with HTML class attribute
})
export class UnderlineDirective {

  @HostBinding('class') isHover: string; // class in style sheet (CSS, SASS)
  @Input() config: any;
  @Input('underline') config2: any;

  // constructor(elem: ElementRef, renderer: Renderer2) {
  constructor(private elem: ElementRef, private renderer: Renderer2) {
    // console.log(elem.nativeElement);
    
    // elem.nativeElement.style.textDecoration = 'underline';
    
    // renderer.setStyle(elem.nativeElement, 'text-decoration', 'underline');
    // renderer.setStyle(elem.nativeElement, 'color', 'indigo');

    this.renderer.setStyle(this.elem.nativeElement, 'text-decoration', 'underline');
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'indigo');

    this.config = {
      colorHover: 'red',
      colorNoHover: 'green',
    }
    this.config2 = {
      colorHover: 'red',
      colorNoHover: 'green',
    }
   }

   @HostListener('mouseover') onHover() {
    this.renderer.setStyle(this.elem.nativeElement, 'color', this.config.colorHover);
    this.renderer.setStyle(this.elem.nativeElement, 'color', this.config2.colorHover);
    this.isHover = 'hover'; // Host Binding
   }

   @HostListener('mouseout') onMouseOut() {
    this.renderer.setStyle(this.elem.nativeElement, 'color', this.config.colorNoHover);
    this.renderer.setStyle(this.elem.nativeElement, 'color', this.config2.colorNoHover);
    this.isHover = 'noHover'; // Host Binding
   }
}
