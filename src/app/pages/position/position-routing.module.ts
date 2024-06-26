import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { PositionComponent } from './position.component';
import { UpdateComponent } from './update/update.component';
import {ListComponent} from "./list/list.component";



const routes: Routes = [
    {
      path: '',
      component: PositionComponent,
      children: [
        {
          path: 'add',
          component: AddComponent,
        },
        {
          path: 'list',
          component: ListComponent,
        },
        {
          path: 'update/:id',
          component: UpdateComponent,
        },
        {
          path: 'delete/:id',
          component: ListComponent
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
  export class PositionRoutingModule {
  }
