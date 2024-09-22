import {Directive, effect, inject, input, TemplateRef, ViewContainerRef} from '@angular/core';
import {Permission} from "./auth.model";
import {AuthService} from "./auth.service";

@Directive({
  selector: 'ng-template[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({alias: 'appAuth'});
  private authService = inject(AuthService)
  //we will use ngTemplate instead
  // still attribute directive because i only change the style but the element exists in the dom
  // private host = inject<ElementRef<HTMLParagraphElement>>(ElementRef);
  templateRef = inject(TemplateRef);// access to the content of ng-template
  private viewContainerRef = inject(ViewContainerRef);// access to the location

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);

        //this.host.nativeElement.style.visibility = 'visible';
      } else {
        this.viewContainerRef.clear();
        //this.host.nativeElement.style.visibility = 'hidden';
      }
    });
  }

}
