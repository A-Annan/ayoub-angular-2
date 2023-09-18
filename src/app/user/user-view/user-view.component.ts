import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {
  constructor(public route: ActivatedRoute) {}
  links = [
    { title: 'Info', url: 'info' },
    { title: 'Projects', url: 'projects' }
  ];

}
