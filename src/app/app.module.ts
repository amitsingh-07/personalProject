import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddFormComponent } from './add-form/add-form.component';
import { OptionsComponent } from './options/options.component';
import { SettingsComponent } from './settings/settings.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './api-service.service';
import { ParentComponent } from './parent/parent.component';
import { CardComponent } from './card/card.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CardFormatterComponent } from './card-formatter/card-formatter.component';
import { CreditCardFormatPipe } from './Pipes/CreditCardFormat.pipe';
import { ArrangementsPipe } from './Pipes/arrangements.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    OptionsComponent,
    SettingsComponent,
    ParentComponent,
    CardComponent,
    FirstComponent,
    SecondComponent,
    AccordionComponent,
    CardFormatterComponent,
    CreditCardFormatPipe,
    ArrangementsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [ApiServiceService, CreditCardFormatPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
