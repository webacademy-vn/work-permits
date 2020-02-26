import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitesComponent } from './sites.component';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [SitesComponent],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [SitesComponent]
})
export class SitesModule { }
