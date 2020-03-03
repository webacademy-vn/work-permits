import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA, USER_ROLES } from '../users';
import { faExclamationCircle, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inactive-users-table',
  templateUrl: './inactive-users-table.component.html',
  styleUrls: ['./inactive-users-table.component.scss']
})
export class InactiveUsersTableComponent implements OnInit {

  faExclamationCircle = faExclamationCircle;
  faCheck = faCheck;

  elementData = ELEMENT_DATA.filter(item => item.userIsActive === false);
  userRoles = USER_ROLES;

  constructor() { }

  ngOnInit() {
  }
}
