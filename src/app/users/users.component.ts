import { Component, OnInit } from '@angular/core';
import { faExclamationCircle, faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  faExclamationCircle = faExclamationCircle;
  faTimes = faTimes;

  status: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  clickEvent() {
    this.status = !this.status;
  }

}
