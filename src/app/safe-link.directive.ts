import {Directive, input} from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]', //the 'a' is optionally added to precise that this directive only used on <a>
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  }
})
export class SafeLinkDirective {
  queryParam = input('myapp', {alias: 'appSafeLink'});

  constructor() {
    console.log('safe link  directive is active ')
  }

  onConfirmLeavePage(event: MouseEvent) {
    let wantsToLeave = window.confirm('Do you really want to leave this page?');
    if (!wantsToLeave) {
      event?.preventDefault();
      return;
    }
    const address = (event.target as HTMLAnchorElement).href;
    (event.target as HTMLAnchorElement).href = address + '?' + this.queryParam();
  }
}
