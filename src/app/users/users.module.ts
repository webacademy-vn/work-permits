import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class UsersModule { }
