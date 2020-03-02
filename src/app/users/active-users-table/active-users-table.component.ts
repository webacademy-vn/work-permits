import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA } from '../users';
import { MatTableDataSource } from '@angular/material';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-active-users-table',
  templateUrl: './active-users-table.component.html',
  styleUrls: ['./active-users-table.component.scss']
})
export class ActiveUsersTableComponent implements OnInit {

  faExclamationCircle = faExclamationCircle;
  elementData = ELEMENT_DATA;
  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  dataSourceActive = new MatTableDataSource(ELEMENT_DATA.filter(item => item.active === true));

  constructor() { }

  ngOnInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceActive.filter = filterValue.trim().toLowerCase();
  }

  isActive(userActivity) {
    const arr = this.elementData.filter(item => item.active === userActivity);
    return arr.length;
  }

}
