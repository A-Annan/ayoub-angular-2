import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectViewInfoComponent } from './project-view-info/project-view-info.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectAddComponent,
    ProjectViewComponent,
    ProjectViewInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
