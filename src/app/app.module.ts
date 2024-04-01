import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReiAdditionComponent } from './rei-addition/rei-addition.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle';


import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { TjsMultiplicationComponent } from './tjs-multiplication/tjs-multiplication.component';
import { JtaDropdownComponent } from './jta-dropdown/jta-dropdown.component';
import { SnamAdditionComponent } from './snam-addition/snam-addition.component';
import { PbrummelAdditionComponent } from './pbrummel-addition/pbrummel-addition.component';
import { MtunaAdditionComponent } from './mtuna-addition/mtuna-addition.component';
import { NumberGeneratorComponent } from './number-generator/number-generator.component';
import { ChsAdditionComponent } from './chs-addition/chs-addition.component';
import { CebAdditionComponent } from './ceb-addition/cebladdition.component';
import { CajNumberComponent } from './caj-number/caj-number.component';

@NgModule({
  declarations: [
    AppComponent
    , PizzaToppingsComponent
    , ReiAdditionComponent
    , TjsMultiplicationComponent,
    JtaDropdownComponent,
    SnamAdditionComponent,
    PbrummelAdditionComponent,
    MtunaAdditionComponent,
    NumberGeneratorComponent,
    ChsAdditionComponent,
    CebAdditionComponent,
    CajNumberComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatRadioModule,
    MatButtonToggleModule
    ,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
