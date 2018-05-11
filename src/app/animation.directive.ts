import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appAnimation]'
})
export class AnimationDirective {


  constructor(public elem: ElementRef) {}

    //  mouse enter
  @HostListener('mouseover') scaleImage() {
    alert('hovered');
    // tslint:disable-next-line:no-trailing-whitespace
    this.elem.nativeElement.nextElementSibling.style.opacity =  '1';
    this.elem.nativeElement.nextElementSibling.style.transform = 'translate(1805px)';
    this.elem.nativeElement.nextElementSibling.style.zIndex = '1';
    this.elem.nativeElement.style.transform = 'scale(1.1)';
    this.elem.nativeElement.style.marginBottom = '10px';

  }

    //  mouse leave
  @HostListener('mouseleave') RemovescaleImage() {
    // tslint:disable-next-line:no-trailing-whitespace
    this.elem.nativeElement.nextElementSibling.style.opacity =  '0';
    this.elem.nativeElement.nextElementSibling.style.transform = 'translate(-50px)';
    this.elem.nativeElement.nextElementSibling.style.zIndex = '-10';
    this.elem.nativeElement.nextElementSibling.style.transition = 'all 0.6s ease-in-out';
    this.elem.nativeElement.style.transform = 'scale(1)';
    this.elem.nativeElement.style.marginBottom = '-50px';
    this.elem.nativeElement.style.transition = 'all 0.6s cubic-bezier(.18,.89,.32,1.28) 0s';

  }

}
