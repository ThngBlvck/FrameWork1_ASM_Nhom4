import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbSidebarModule,
  NbMenuModule,
  NbDatepickerModule,
  NbDialogModule, NbWindowModule, NbToastrModule, NbChatModule
} from '@nebular/theme';
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./@core/core.module";
import {ThemeModule} from "./@theme/theme.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxChartsModule} from "@swimlane/ngx-charts";




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
