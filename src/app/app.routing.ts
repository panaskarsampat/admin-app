import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsermasterComponent } from './usermaster/usermaster.component';
import { CitymasterComponent } from './citymaster/citymaster.component';
import { StatemasterComponent } from './statemaster/statemaster.component';
import { CountrymasterComponent } from './countrymaster/countrymaster.component';
import { CompanymasterComponent } from './companymaster/companymaster.component';
import { RolemasterComponent } from './rolemaster/rolemaster.component';
import { DepartmentmasterComponent } from './departmentmaster/departmentmaster.component';
import { DesignationmasterComponent } from './designationmaster/designationmaster.component';
import { EducationmasterComponent } from './educationmaster/educationmaster.component';

const routes: Routes =[
    { path: 'login',      component: LoginComponent },  
    { path: 'home',      component: HomeComponent,
    children: [ 
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'usermaster',      component: UsermasterComponent },
    { path: 'citymaster',      component: CitymasterComponent },
    { path: 'statemaster',      component: StatemasterComponent },
    { path: 'countrymaster',      component: CountrymasterComponent },
    { path: 'companymaster',      component: CompanymasterComponent },
    { path: 'rolemaster',      component: RolemasterComponent },
    { path: 'departmentmaster',      component: DepartmentmasterComponent },
    { path: 'designationmaster',      component: DesignationmasterComponent },
    { path: 'educationmaster',      component: EducationmasterComponent },
    ]},
    { path: '**',redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
