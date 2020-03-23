import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatListModule, MatMenuModule, MAT_LABEL_GLOBAL_OPTIONS, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material'
import { PermitsModule } from './permits/permits.module';
import { SitesModule } from './sites/sites.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { PermitTemplatesModule } from './permit-templates/permit-templates.module';
import { WorkerProfileModule } from './worker-profile/worker-profile.module';
import { WorkflowsModule } from './workflows/workflows.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    PermitsModule,
    MatMenuModule,
    SitesModule,
    RolesModule,
    UsersModule,
    PermitTemplatesModule,
    WorkerProfileModule,
    WorkflowsModule,
    MatExpansionModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
