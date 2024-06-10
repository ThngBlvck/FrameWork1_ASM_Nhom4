import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {EfficiencyComponent} from "./efficiency.component";
import {AddComponent} from "./add/add.component";
import {UpdateComponent} from "./update/update.component";

const routes: Routes = [
  {
    path: '',
    component: EfficiencyComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'edit/:id',
    component: UpdateComponent,
  }
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
