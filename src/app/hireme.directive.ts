import { Directive , HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHireme]'
})
export class HiremeDirective {

  constructor(private elem: ElementRef) { }
  @HostListener('click')hireme() {

  }

}
