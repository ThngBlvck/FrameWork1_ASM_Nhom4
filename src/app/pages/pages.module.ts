import {NgModule} from '@angular/core';
import {NbMenuModule} from "@nebular/theme";
import {ThemeModule} from '../@theme/theme.module';

import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {PaginatorModule} from "../@theme/components/paginator/paginator.module";
import {NgxChartsModule} from "@swimlane/ngx-charts";




@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    NbMenuModule,
    PaginatorModule,
    NgxChartsModule
  ],
  declarations: [
    PagesComponent
  ],
  providers: []
})
export class PagesModule { }
