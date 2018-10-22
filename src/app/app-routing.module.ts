import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './parties/dashboard/dashboard.component';
import {PointageComponent} from './pointage/pointage.component';
import {AddPointageComponent} from './pointage/add-pointage.component';
import {ClientComponent} from './client/client.component';
import {AddClientComponent} from './client/add-client.component';
import {EmployeComponent} from './employe/employe.component';
import {AddEmployeComponent} from './employe/add-employe.component';
import {SiteComponent} from './site/site.component';
import {AddSiteComponent} from './site/add-site.component';
import {UpdatePointageComponent} from './pointage/update-pointage.component';
import {UpdateClientComponent} from './client/update-client.component';
import {UpdateSiteComponent} from './site/update-site.component';
import {UpdateEmployeComponent} from './employe/update-employe.component';
import {SupervisionComponent} from './supervision/supervision.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'pointage', component: PointageComponent},
  {path: 'add-pointage', component: AddPointageComponent},
  {path: 'client', component: ClientComponent},
  {path: 'add-client', component: AddClientComponent},
  {path: 'employe', component: EmployeComponent},
  {path: 'add-employe', component: AddEmployeComponent},
  {path: 'site', component: SiteComponent},
  {path: 'add-site', component: AddSiteComponent},
  {path: 'update-pointage', component: UpdatePointageComponent},
  {path: 'update-client', component: UpdateClientComponent},
  {path: 'update-site', component: UpdateSiteComponent},
  {path: 'update-employe', component: UpdateEmployeComponent},
  {path: 'supervision', component: SupervisionComponent}
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
