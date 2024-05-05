import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { AboutComponent } from './about/about.component';
import { UserDashboardModule } from '../user-dashboard/user-dashboard.module';
import { PeopleComponent } from './people/people.component';

import { MyInfoComponent } from './myinfo/myinfo.component';

import { HiringComponent } from './hiring/hiring.component';
import { LoginModule } from '../login/login.module';

import { EmployeeprofileModalComponent } from '../employeeprofile-modal/employeeprofile-modal.component';
import {  FormsModule } from '@angular/forms';
import { DocumentComponent } from './myinfo/document/document.component';
import { PersonalComponent } from './myinfo/personal/personal.component';



@NgModule({
  declarations: [
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    PeopleComponent,
    MyInfoComponent,
    HiringComponent,
    EmployeeprofileModalComponent,
    DocumentComponent,
    PersonalComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    UserDashboardModule,
    LoginModule,
    FormsModule
  ],
  exports: [
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    PeopleComponent,
    MyInfoComponent,
    HiringComponent,
    EmployeeprofileModalComponent,
    PersonalComponent
  ],


})
export class CoreElementModule {}
