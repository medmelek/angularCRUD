import { DashboardComponent } from './dashboard/dashboard.component';
import { LauncherComponent } from './launcher/launcher.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'launcher', component: LauncherComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/launcher', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
