import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { CommunicationsComponent } from './communications.component';


const routes: Routes = [
    {
      path: '',
      component: CommunicationsComponent,
      children: [
        {
          path: 'add',
          component: AddComponent,
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
  export class CommunicationsRoutingModule {
  }