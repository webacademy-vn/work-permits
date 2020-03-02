import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA } from '../users';
import { MatTableDataSource } from '@angular/material';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inactive-users-table',
  templateUrl: './inactive-users-table.component.html',
  styleUrls: ['./inactive-users-table.component.scss']
})
export class InactiveUsersTableComponent implements OnInit {

  faExclamationCircle = faExclamationCircle;
  elementData = ELEMENT_DATA;
  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  dataSourceInactive = new MatTableDataSource(ELEMENT_DATA.filter(item => item.active === false));

  constructor() { }

  ngOnInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceInactive.filter = filterValue.trim().toLowerCase();
  }

  isActive(userActivity) {
    const arr = this.elementData.filter(item => item.active === userActivity);
    return arr.length;
  }
}
