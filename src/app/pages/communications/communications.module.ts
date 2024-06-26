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
import { CommunicationsRoutingModule } from './communications-routing.module';
import { CommunicationsComponent } from './communications.component';
import { AddComponent } from './add/add.component';
import {FormsModule as ngFormsModule, ReactiveFormsModule} from '@angular/forms';

import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';
import {PaginatorModule} from "../../@theme/components/paginator/paginator.module";

@NgModule({
    imports: [
        ThemeModule,
        NbInputModule,
        NbCardModule,
        NbButtonModule,
        NbActionsModule,
        NbUserModule,
        NbCheckboxModule,
        NbRadioModule,
        NbDatepickerModule,
        CommunicationsRoutingModule,
        NbSelectModule,
        NbIconModule,
        ngFormsModule,
        ReactiveFormsModule,
        PaginatorModule,
    ],
  declarations: [CommunicationsComponent, AddComponent, EditComponent, ListComponent, DeleteComponent],
})
export class CommunicationsModule {}
