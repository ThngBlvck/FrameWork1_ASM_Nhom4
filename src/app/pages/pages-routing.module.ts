import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SalaryComponent} from "./salary/salary.component";

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
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
