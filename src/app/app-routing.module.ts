import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermitsComponent } from './permits/permits.component';


const routes: Routes = [
  { path:'', component: PermitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
