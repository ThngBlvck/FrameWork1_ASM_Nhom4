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
import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { AddComponent } from './add/add.component';
import {FormsModule as ngFormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';
import { PaginatorModule } from 'app/@theme/components/paginator/paginator.module';

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
    DepartmentsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    ReactiveFormsModule,
    PaginatorModule
  ],
  declarations: [DepartmentsComponent, AddComponent, UpdateComponent, ListComponent, DeleteComponent],
})
export class DepartmentsModule {}
