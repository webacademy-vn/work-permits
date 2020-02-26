import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatSidenavModule,
  ]
})
export class UsersModule { }
