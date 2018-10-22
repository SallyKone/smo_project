import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PointageComponent } from './pointage/pointage.component';
import { AppRoutingModule } from './app.routing.module';
import {UserService} from './user/user.service';
import {PointageService} from './pointage/pointage.service';
import {AddUserComponent} from './user/add-user.component';
import {AddPointageComponent} from './pointage/add-pointage.component';
import {HttpClientModule} from '@angular/common/http';
import {PartiesModule} from './parties/parties.module';
import { ClientComponent } from './client/client.component';
import { AddClientComponent } from './client/add-client.component';
import { SiteComponent } from './site/site.component';
import { AddSiteComponent } from './site/add-site.component';
import { EmployeComponent } from './employe/employe.component';
import { AddEmployeComponent } from './employe/add-employe.component';
import { UpdatePointageComponent } from './pointage/update-pointage.component';
import { UpdateClientComponent } from './client/update-client.component';
import { UpdateEmployeComponent } from './employe/update-employe.component';
import { UpdateSiteComponent } from './site/update-site.component';
import { SupervisionComponent } from './supervision/supervision.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    PointageComponent,
    AddPointageComponent,
    ClientComponent,
    AddClientComponent,
    SiteComponent,
    AddSiteComponent,
    EmployeComponent,
    AddEmployeComponent,
    UpdatePointageComponent,
    UpdateClientComponent,
    UpdateEmployeComponent,
    UpdateSiteComponent,
    SupervisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PartiesModule
  ],
  providers: [UserService, PointageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
