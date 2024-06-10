import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HPreportsComponent} from "./hpreports.component";




const routes: Routes = [
  {
    path: '',
    component: HPreportsComponent
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
