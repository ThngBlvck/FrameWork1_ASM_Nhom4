import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import {HPreportsComponent} from "./hpreports.component";

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,

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
export class HPreportsRoutingModule {
}
