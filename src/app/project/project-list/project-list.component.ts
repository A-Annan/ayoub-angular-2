import { Component } from '@angular/core';
import { Project } from '../Entity/project.entity';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  projects = Array<Project>();

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.projectService
      .findAll({
        limit: 10,
        page: 1,
      })
      .subscribe((data: any) => {
        this.projects = data;
      });
  }

  delete(user: Project){
    this.projectService.delete(user._id).subscribe((data: any) => {
      this.getData();
    });
  }

  view(user: Project) {
    this.router.navigate(['/details', user._id]);
  }

}
