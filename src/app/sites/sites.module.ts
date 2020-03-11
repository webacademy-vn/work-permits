import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitesComponent } from './sites.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SiteFormModule } from './site-form/site-form.module';
import { SiteService } from './service/site.service';
import { SiteTableComponent } from './site-table/site-table.component';
import { SiteTableModule } from './site-table/site-table.module';




@NgModule({
  declarations: [SitesComponent, SiteTableComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    SiteFormModule,
    SiteTableModule
  ],
  providers: [SiteService],
  exports: [SitesComponent]
})
export class SitesModule { }
