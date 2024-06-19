import { NgModule } from '@angular/core';
import { NbToastrModule } from '@nebular/theme';
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
import { DayoffRoutingModule } from './dayoff-routing.module';
import { DayoffComponent } from './dayoff.component';
import { AddComponent } from './add/add.component';
import {FormsModule as ngFormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
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
        DayoffRoutingModule,
        NbSelectModule,
        NbIconModule,
        ngFormsModule,
        ReactiveFormsModule,
        NbToastrModule,
        PaginatorModule
    ],
  declarations: [DayoffComponent, AddComponent, ListComponent, UpdateComponent, DeleteComponent],
})
export class DayoffModule {}
