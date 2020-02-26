import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermitsComponent } from './permits/permits.component';
import { SitesComponent } from './sites/sites.component'
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';
import { PermitTemplatesComponent } from './permit-templates/permit-templates.component';
import { WorkerProfileComponent } from './worker-profile/worker-profile.component';
import { WorkflowsComponent } from './workflows/workflows.component';


const routes: Routes = [
  { path:'permits', component: PermitsComponent },
  { path: "sites", component: SitesComponent },
  { path: "roles", component: RolesComponent },
  { path: "users", component: UsersComponent },
  { path: "permit-temlates", component: PermitTemplatesComponent },
  { path: "worker-profile", component: WorkerProfileComponent },
  { path: "workflows", component: WorkflowsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
