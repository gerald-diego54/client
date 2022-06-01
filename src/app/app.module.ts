import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityComponent } from './modules/security/security.component';
import { MainComponent } from './modules/main/main.component';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';

import { TopbarComponent } from './modules/layouts/topbar/topbar.component';
import { SidebarComponent } from './modules/layouts/sidebar/sidebar.component';
import { AnnualRecordsComponent } from './modules/annual-records/annual-records.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NewDailyExpenseComponent } from './modules/dialog-services/new-daily-expense/new-daily-expense.component';
import { AnnuallyReportsComponent } from './modules/annually-reports/annually-reports.component';
import { AnnuallyContributionsComponent } from './modules/annually-contributions/annually-contributions.component';
import { RegisterComponent } from './modules/security/register/register.component';



import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { NewRecordsComponent } from './modules/dialog-services/new-records/new-records.component';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { ChartModule } from 'primeng/chart';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { AppSettings } from './app-settings';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { UpdateRecordsComponent } from './modules/dialog-services/update-records/update-records.component';





@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent,
    MainComponent,
    TopbarComponent,
    SidebarComponent,
    DashboardComponent,
    AnnualRecordsComponent,
    NewRecordsComponent,
    NewDailyExpenseComponent,
    AnnuallyReportsComponent,
    AnnuallyContributionsComponent,
    RegisterComponent,
    UpdateRecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule,
    SidebarModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    FormsModule,
    MenuModule,
    BreadcrumbModule,
    DynamicDialogModule,
    ToastModule,
    TableModule,
    InputNumberModule,
    CalendarModule,
    InputMaskModule,
    ChartModule,
    ProgressSpinnerModule,
    DialogModule,
    HttpClientModule,
    ConfirmDialogModule,
  ],
  providers: [AppSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }
