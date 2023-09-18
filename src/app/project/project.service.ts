import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from './Entity/project.entity';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  findAll(params: any) {
    return this.httpClient.get('http://localhost:3000/project', {
      params
    });
  }

  findOne(id: string) {
    return this.httpClient.get<Project>('http://localhost:3000/project/'+id);
  }

  update(Project: Project) {
    return this.httpClient.patch<Project>('http://localhost:3000/project/'+Project._id, Project);
  }
  add(Project: Project) {
    return this.httpClient.post<Project>('http://localhost:3000/project', Project);
  }

  delete(_id: string | undefined) {
    return this.httpClient.delete<Project>('http://localhost:3000/project/'+_id);
  }
}
