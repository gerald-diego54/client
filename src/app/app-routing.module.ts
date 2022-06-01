import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnualRecordsComponent } from './modules/annual-records/annual-records.component';
import { AnnuallyContributionsComponent } from './modules/annually-contributions/annually-contributions.component';
import { AnnuallyReportsComponent } from './modules/annually-reports/annually-reports.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

import { MainComponent } from './modules/main/main.component';
import { RegisterComponent } from './modules/security/register/register.component';
import { SecurityComponent } from './modules/security/security.component';
import { AnnuallyRecordProtection } from './protected-routes/annual-records-protection';
import { AnnuallyContributionProtection } from './protected-routes/annually-contributions-protection';
import { AnnuallyReportsProtection } from './protected-routes/annually-reports-protection';
import { DashboardProtection } from './protected-routes/dashboard-protection';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'main/security', component: SecurityComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [DashboardProtection] },
  { path: 'annual-record', component: AnnualRecordsComponent, canActivate: [AnnuallyRecordProtection] },
  { path: 'annual-reports', component: AnnuallyReportsComponent, canActivate: [AnnuallyReportsProtection] },
  { path: 'annual-contributions', component: AnnuallyContributionsComponent, canActivate: [AnnuallyContributionProtection] },
  { path: 'main/register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DashboardProtection, AnnuallyContributionProtection, AnnuallyRecordProtection, AnnuallyReportsProtection]
})
export class AppRoutingModule { }
