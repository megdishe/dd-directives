import {Directive} from '@angular/core';

@Directive({
  selector: '[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  }
})
export class SafeLinkDirective {

  constructor() {
    console.log('safe link  directive is active ')
  }

  onConfirmLeavePage(event: MouseEvent) {
    let wantsToLeave = window.confirm('Do you really want to leave this page?');
    if (!wantsToLeave) {
      event?.preventDefault();
    }
  }
}
