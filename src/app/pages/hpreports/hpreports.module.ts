import { NgModule } from '@angular/core';
// import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { HPreportsRoutingModule } from './hpreports-routing.module';
import { HPreportsComponent } from './hpreports.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import {NgxChartsModule} from "@swimlane/ngx-charts";

@NgModule({
  imports: [
    // Ng2SmartTableModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    HPreportsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    NgxChartsModule,
  ],
  declarations: [HPreportsComponent],
})
export class HPreportsModule {}
