import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { Project } from '../Entity/project.entity';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {
  id: string = '';

  project: Project =new Project();
  editState = false;

    constructor(
      private route: ActivatedRoute,
      private projectService: ProjectService,
      private location: Location
    ) { }

    ngOnInit(): void {
      this.id = this?.route?.snapshot?.paramMap.get('project_id') as string;
      this.getData();
    }

  getData() {
    this.projectService.findOne(this.id).subscribe(resp => {
      this.project = new Project(resp);
    })
  }



  cancel(){
    this.getData();
    this.editState = false;
  }

  validate(){
    this.projectService.update(this.project).subscribe(r=>{
      this.editState=false;
      this.getData();
      })
  }

  back(){
    this.location.back();
  }


}
