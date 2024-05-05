import { NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './service/authentication.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreElementModule } from './core-element/core-element.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { DatePipe } from '@angular/common';
import { NgxUiLoaderModule,NgxUiLoaderHttpModule}  from 'ngx-ui-loader';
import { AttendenceReportComponent } from './attendence-report/attendence-report.component';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ExcelService } from './service/excel.service';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendenceReportComponent,
    ViewEmployeeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    CoreElementModule,
    HttpClientModule,
    UserDashboardModule,
    FormsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot (
      { 
        showForeground: true, 
        maxTime: 30000, 
        minTime: 10 
      }
    ),
    
  ],
  providers: [DatePipe, ExcelService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }