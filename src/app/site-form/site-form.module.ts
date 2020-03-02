import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteFormComponent } from './site-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SiteFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [SiteFormComponent]

})
export class SiteFormModule { }
