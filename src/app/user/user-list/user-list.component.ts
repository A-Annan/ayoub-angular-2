import { Component, OnInit } from '@angular/core';
import { User } from '../Entity/user.entity';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  results = new FindResutlt<User>() ;
  page = 1;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(page: number = 1) {
    this.userService
      .findAll({
        limit: 2,
        page: page,
      })
      .subscribe((data: any) => {
        if (data )
          this.results = data;

      });
  }

  delete(user: User) {
    this.userService.delete(user._id).subscribe((data: any) => {
      this.getData();
    });
  }

  view(user: User) {
    this.router.navigate(['/details', user._id]);
  }
}

export class FindResutlt<T> {
  meta!: Meta;
  docs!: Array<T>;
  constructor() {
    this.meta = new Meta();
    this.docs = new Array<T>();
  }
}


export class Meta {
  totalDocs!: number;
  page:number = 0;
  limit: number = 10;
  totalPages!:number
}
