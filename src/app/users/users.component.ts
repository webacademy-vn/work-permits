import { Component, OnInit } from '@angular/core';
import { faExclamationCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import {MatTableDataSource} from '@angular/material/table';
import { ELEMENT_DATA } from './users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSourceActive = new MatTableDataSource(ELEMENT_DATA.filter(i => i.active === true));
  dataSourceInactive = new MatTableDataSource(ELEMENT_DATA.filter(i => i.active === false));
  elementData = ELEMENT_DATA;

  faExclamationCircle = faExclamationCircle;
  faTimes = faTimes;

  status: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  clickEvent() {
    this.status = !this.status;
    return this.status;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  activity(status) {
      const arr = this.elementData.filter(item => item.active === status);
      return arr.length;
  }
  

}
