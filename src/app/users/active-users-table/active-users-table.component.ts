import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA, USER_ROLES } from '../users';
import { faExclamationCircle, faCheck, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { User } from '../user';

@Component({
  selector: 'app-active-users-table',
  templateUrl: './active-users-table.component.html',
  styleUrls: ['./active-users-table.component.scss']
})
export class ActiveUsersTableComponent implements OnInit {

  faExclamationCircle = faExclamationCircle;
  faCheck = faCheck;
  faUserCircle = faUserCircle;

  elementData = ELEMENT_DATA.filter(item => item.userIsActive === true);
  userRoles = USER_ROLES;

  
  public userRoleName(elem: User) : string {
    return this.userRoles[elem.userRole].roleName;
  }
  

  constructor() { }

  ngOnInit() {
  }
}
