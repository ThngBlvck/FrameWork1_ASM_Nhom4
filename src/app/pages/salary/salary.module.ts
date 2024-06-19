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
import {FormsModule as ngFormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import {SalaryService} from "../../@core/services/apis/salary.service";
import { DeleteComponent } from './delete/delete.component';
import {PaginatorModule} from "../../@theme/components/paginator/paginator.module";


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
        ReactiveFormsModule,
        PaginatorModule,
    ],
  providers: [
    SalaryService
  ],
  declarations: [SalaryComponent, AddComponent, EditComponent, ListComponent, DeleteComponent],
})
export class SalaryModule {}
