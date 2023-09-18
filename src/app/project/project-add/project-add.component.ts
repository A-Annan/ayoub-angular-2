import { Component, OnInit } from '@angular/core';
import { Project } from '../Entity/project.entity';
import { ProjectService } from '../project.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit{

  project: Project = new Project();
  userId: string  = '';

  constructor(
    private location: Location,
    private projectService: ProjectService,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.userId = this?.route?.parent?.parent?.snapshot.paramMap.get('id') as string;
  }


  back() {
    this.location.back();
  }

  add() {
    this.userService.addProject(this.userId, this.project).subscribe(
      () => this.location.back()
    );
  }

}
