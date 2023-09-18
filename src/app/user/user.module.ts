import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserViewComponent } from './user-view/user-view.component';
import { FormsModule } from '@angular/forms';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { UserInfoViewComponent } from './user-info-view/user-info-view.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    UserViewComponent,
    UserInfoViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbNavModule,
    UserRoutingModule
  ]
})
export class UserModule { }
