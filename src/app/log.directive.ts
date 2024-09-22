import {Directive, ElementRef, inject} from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host: {
    '(click)': 'onLog()'
  }
})
export class LogDirective {
  private host = inject(ElementRef);

  constructor() {
  }

  onLog() {
    console.log('Clicked {}', this.host);
  }
}
