import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]',
})

export class basicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {

    }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}