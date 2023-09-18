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
  users = Array<User>();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userService
      .findAll({
        limit: 10,
        page: 1,
      })
      .subscribe((data: any) => {
        this.users = data;
      });
  }

  delete(user: User){
    this.userService.delete(user._id).subscribe((data: any) => {
      this.getData();
    });
  }

  view(user: User) {
    this.router.navigate(['/details', user._id]);
  }
}
