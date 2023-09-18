import { Component } from '@angular/core';
import { User } from '../Entity/user.entity';
import { Location } from '@angular/common';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
showForm: any;

constructor(
  private location: Location,
  private userService: UserService
){}

user = new User();

back() {
  this.location.back();
}

add() {
  this.userService.add(this.user).subscribe(
    () => this.location.back()
  );
}





}
