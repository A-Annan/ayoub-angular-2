import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {
    path:'users',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
},
{path:"home",component:UserListComponent},
{
  path:'**',
  redirectTo:'users'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
