import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { UsermasterComponent } from './usermaster/usermaster.component';
import { CitymasterComponent } from './citymaster/citymaster.component';
import { StatemasterComponent } from './statemaster/statemaster.component';
import { CountrymasterComponent } from './countrymaster/countrymaster.component';
import { CompanymasterComponent } from './companymaster/companymaster.component';
import { RolemasterComponent } from './rolemaster/rolemaster.component';
import { DepartmentmasterComponent } from './departmentmaster/departmentmaster.component';
import { DesignationmasterComponent } from './designationmaster/designationmaster.component';
import { EducationmasterComponent } from './educationmaster/educationmaster.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsermasterComponent,
    CitymasterComponent,
    StatemasterComponent,
    CountrymasterComponent,
    CompanymasterComponent,
    RolemasterComponent,
    DepartmentmasterComponent,
    DesignationmasterComponent,
    EducationmasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
