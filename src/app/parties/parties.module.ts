import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [HeaderComponent, MenuComponent, FooterComponent, ContentComponent, DashboardComponent],
  exports: [ContentComponent, HeaderComponent, MenuComponent, FooterComponent, ContentComponent, DashboardComponent]
})
export class PartiesModule { }
