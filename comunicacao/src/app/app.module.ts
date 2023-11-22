import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilhoComponent } from './components/filho/filho.component';
import { PaiComponent } from './components/pai/pai.component';
import { ItemAddComponent } from './components/item-add/item-add.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { DatePickerComponent } from './components/avancados/datepicker.component';
import { ModalComponent } from './components/avancados/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Dialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    FilhoComponent,
    PaiComponent,
    ItemAddComponent,
    ItemListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
