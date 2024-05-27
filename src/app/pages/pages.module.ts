import {NgModule} from '@angular/core';
import {NbMenuModule} from "@nebular/theme";
import {ThemeModule} from '../@theme/theme.module';

import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {PaginatorModule} from "../@theme/components/paginator/paginator.module";
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddComponent } from './departments/add/add.component';
import { UpdateComponent } from './departments/update/update.component';
import { ListComponent } from './departments/list/list.component';



@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    NbMenuModule,
    PaginatorModule,
  ],
  declarations: [
    PagesComponent,
    DepartmentsComponent,
    EmployeeComponent,
    AddComponent,
    UpdateComponent,
    ListComponent
  ],
  providers: []
})
export class PagesModule { }
