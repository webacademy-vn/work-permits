import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitesComponent } from './sites.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SiteFormModule } from '../site-form/site-form.module';



@NgModule({
  declarations: [SitesComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    SiteFormModule
  ],
  exports: [SitesComponent]
})
export class SitesModule { }
