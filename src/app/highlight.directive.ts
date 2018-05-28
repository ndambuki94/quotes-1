import { Directive, ElementRef, Input , HostListener } from '@angular/core';
import {Quote} from './quote';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() quote:Quote;

  constructor(private elem:ElementRef){}

  @HostListener("click") onClicks(){
    this.fontSize("xx-large")
  }

  private fontSize(action:string){
    this.elem.nativeElement.style.fontSize=action;

  }


}
