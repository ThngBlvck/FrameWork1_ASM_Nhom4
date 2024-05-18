import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { CommunicationsComponent } from './communications.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
    {
      path: '',
      component: CommunicationsComponent,
      children: [
        {
          path: 'add',
          component: AddComponent,
        },
        {
          path: 'edit',
          component: EditComponent,
        },
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
  export class CommunicationsRoutingModule {
  }