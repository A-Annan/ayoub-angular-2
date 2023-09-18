import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Entity/user.entity';
import { Project } from 'src/app/project/Entity/project.entity';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  findAll(params: any) {
    return this.httpClient.get('http://localhost:3000/user', {
      params
    });
  }

  findOne(id: string) {
    return this.httpClient.get<User>('http://localhost:3000/user/'+id);
  }

  update(user: User) {
    return this.httpClient.patch<User>('http://localhost:3000/user/'+user._id, user);
  }
  add(user: User) {
    return this.httpClient.post<User>('http://localhost:3000/user', user);
  }

  delete(_id: string | undefined) {
    return this.httpClient.delete<User>('http://localhost:3000/user/'+_id);
  }

  addProject(userId: string, project: Project) {
    return this.httpClient.post<User>('http://localhost:3000/user/'+userId+'/project',{project});
  }
}
