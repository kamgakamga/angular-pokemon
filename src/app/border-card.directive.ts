import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) { 
    //on recupere l'element du dom
    // el represente la reference de l'element du dom sur le quel on souhaite applique un traitement
  this.setHeight(180);
  this.setBorder('#f5f5f5');
  }

  @HostListener('mouseenter') 
  onMouseEnter() {
      this.setBorder(this.setBorder || '#009688');
  }

  @HostListener('mouseleave') 
    onMouseLeave() {
    this.setBorder('#f5f5f5');
}


  setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
  }
  setBorder(color: string){
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
