import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule, MatSelectModule, MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material';
import { ActiveUsersTableComponent } from './active-users-table/active-users-table.component';
import { InactiveUsersTableComponent } from './inactive-users-table/inactive-users-table.component';
import { AddNewUserFormComponent } from './add-new-user-form/add-new-user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent,
    ActiveUsersTableComponent,
    InactiveUsersTableComponent,
    AddNewUserFormComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}},
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
})
export class UsersModule { }
