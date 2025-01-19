import { Component } from '@angular/core';
import { UserCardListComponent } from "./user-card-list/user-card-list.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import {MaterialAngularComponent} from "./material-angular/material-angular.component";

@Component({
  selector: 'app-root',
  template: `<div>
  <app-user-card-list></app-user-card-list>
  <app-login-form></app-login-form>
  <app-material-angular></app-material-angular>
  </div>`,
  imports: [UserCardListComponent, LoginFormComponent,MaterialAngularComponent]
})
export class AppComponent {
  
}
