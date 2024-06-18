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
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule, FormsModule as ngFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';

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
    EmployeeRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    ReactiveFormsModule
  ],
  declarations: [EmployeeComponent, AddComponent, UpdateComponent, ListComponent, DeleteComponent],
})
export class EmployeeModule {}
