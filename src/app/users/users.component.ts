import { Component, OnInit } from '@angular/core';
import { faExclamationCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
];


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

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

}
