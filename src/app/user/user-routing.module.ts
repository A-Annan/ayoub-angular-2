import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserInfoViewComponent } from './user-info-view/user-info-view.component';

const routes: Routes = [
  {
    path:'',
    component: UserListComponent,
  },
  {
    path:'add',
    component: UserAddComponent,
  },
  {
    path:'details/:id',
    component: UserViewComponent,
    children:[
      {
        path: 'info',
        component: UserInfoViewComponent,
      },
      {
        path: 'projects',
        loadChildren: () => import('../project/project.module').then(m => m.ProjectModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
