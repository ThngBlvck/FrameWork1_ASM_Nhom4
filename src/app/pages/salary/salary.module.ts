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
import { SalaryRoutingModule } from './salary-routing.module';
import { SalaryComponent } from './salary.component';
import { AddComponent } from './add/add.component';
import { FormsModule as ngFormsModule } from '@angular/forms';

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
    SalaryRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
  ],
  declarations: [SalaryComponent, AddComponent],
})
export class SalaryModule {}
