import { Component, OnInit } from '@angular/core';
import { faExclamationCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ELEMENT_DATA } from './users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  elementData = ELEMENT_DATA;

  faExclamationCircle = faExclamationCircle;
  faTimes = faTimes;

  isOpenWarnBanner: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isOpenWarnBanner = !this.isOpenWarnBanner;
    return this.isOpenWarnBanner;

  }


  isActive(userActivity) {
    const arr = this.elementData.filter(item => item.userIsActive === userActivity);
    return arr.length;
  }
  

}
