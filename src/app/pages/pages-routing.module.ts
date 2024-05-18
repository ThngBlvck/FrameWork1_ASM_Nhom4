import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from "./dashboard/dashboard.component";


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: {breadcrumb: 'Dashboard'},
    },

    {
      path: 'Salary',
      loadChildren: () => import('./salary/salary.module')
      .then(m => m.SalaryModule),
    },
    {
      path: 'Communications',
      loadChildren: () => import('./communications/communications.module')
      .then(m => m.CommunicationsModule),
    },
    {
      path: 'Dayoff',
      loadChildren: () => import('./dayoff/dayoff.module')
      .then(m => m.DayoffModule),
    },
    {
      path: 'Position',
      loadChildren: () => import('./position/position.module')
      .then(m => m.PositionModule),
    },
    {
      path: 'Employee',
      loadChildren: () => import('./employee/employee.module')
      .then(m => m.EmployeeModule),
    },
    {
      path: 'Departments',
      loadChildren: () => import('./departments/departments.module')
      .then(m => m.DepartmentsModule),
    },
    {
      path: 'Efficiency',
      loadChildren: () => import('./efficiency/efficiency.module')
        .then(m => m.EfficiencyModule),
    },
    {
      path: 'HPreports',
      loadChildren: () => import('./hpreports/hpreports.module')
        .then(m => m.HPreportsModule),
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
