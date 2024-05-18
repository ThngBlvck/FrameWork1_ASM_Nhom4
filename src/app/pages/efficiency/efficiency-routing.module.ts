import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import {EfficiencyComponent} from "./efficiency.component";

const routes: Routes = [
  {
    path: '',
    component: EfficiencyComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
      }

    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class EfficiencyRoutingModule {
}
