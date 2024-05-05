import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBodyComponent } from './user-body/user-body.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PunchComponent } from './punch/punch.component';
import { LeaveComponent } from '../leave/leave/leave.component';
import { FormsModule } from '@angular/forms';
import { LeaveModalComponent } from '../leave/leave-modal/leave-modal.component';


@NgModule({
  declarations: [
    UserBodyComponent,
    UserSidebarComponent,
    UserDashboardComponent,
    PunchComponent,
    LeaveComponent,
    LeaveModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserBodyComponent,
    UserSidebarComponent,
    UserDashboardComponent,
    PunchComponent,
    LeaveComponent,
    LeaveModalComponent
  ]
})
export class UserDashboardModule { }
