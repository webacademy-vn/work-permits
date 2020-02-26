import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermitsComponent } from './permits.component';



@NgModule({
  declarations: [PermitsComponent],
  imports: [
    CommonModule
  ],
  exports: [PermitsComponent]
})
export class PermitsModule { }
