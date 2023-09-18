import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../Entity/user.entity';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-info-view',
  templateUrl: './user-info-view.component.html',
  styleUrls: ['./user-info-view.component.css']
})
export class UserInfoViewComponent implements OnInit {
  id!: string;
  user: User = new User();

  editButton: boolean = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.id = this?.route?.parent?.snapshot.params['id'];

    this.getData();
  }


  getData() {
    this.userService.findOne(this.id).subscribe((data: User) => {
      this.user = new User(data);
    }
    );
  }


  cancel(){
    this.getData();
    this.editButton = false;
  }


  validate(){
    this.userService.update(this.user).subscribe((data: User) => {
      this.getData();
      this.editButton = false;
    }
    );
  }

  back(){
    this.location.back();
  }
}
