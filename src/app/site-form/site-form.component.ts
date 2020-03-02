import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-site-form',
  templateUrl: './site-form.component.html',
  styleUrls: ['./site-form.component.scss']
})
export class SiteFormComponent implements OnInit {
  form: FormGroup;

  faExclamationCircle = faExclamationCircle;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = new FormGroup({
      siteName: new FormControl('', [Validators.required]),
      siteId: new FormControl(''),
      timeZone: new FormControl('', [Validators.required]),
      selectOccupier: new FormControl('', [Validators.required]),
      emergencyMobileNumber: new FormControl('', [Validators.required]),
      emergencyEmailId: new FormControl('', [Validators.required, Validators.email]),
      isActive: new FormControl('active'),
    });
  }

  submit(){
    console.log(this.form.value)
  }

}
