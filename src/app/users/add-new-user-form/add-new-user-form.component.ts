import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { USER_ROLES } from '../users';

@Component({
  selector: 'app-add-new-user-form',
  templateUrl: './add-new-user-form.component.html',
  styleUrls: ['./add-new-user-form.component.scss']
})
export class AddNewUserFormComponent implements OnInit {

  encapsulation: ViewEncapsulation.None;
  userRoles = USER_ROLES;
  form: FormGroup;
  value;
  
  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = new FormGroup({
        userFullName: new FormControl('', [Validators.required]),
        userEmail: new FormControl('', [Validators.required, Validators.email]),
        userRole: new FormControl(this.value, [Validators.required])
      });
  }

  submit(){
    console.log(this.form.value);
  }

}
