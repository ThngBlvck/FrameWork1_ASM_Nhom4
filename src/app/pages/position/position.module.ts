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
import { PositionRoutingModule } from './position-routing.module';
import { PositionComponent } from './position.component';
import { AddComponent } from './add/add.component';
import {FormsModule as ngFormsModule, ReactiveFormsModule} from '@angular/forms';
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
    PositionRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    ReactiveFormsModule,
    NbToastrModule
  ],
  declarations: [PositionComponent, AddComponent,  UpdateComponent, ListComponent, DeleteComponent],
})
export class PositionModule {}
