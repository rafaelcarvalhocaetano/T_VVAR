import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputComponent } from './components/input/input.component';
import { MultSelectorComponent } from './components/mult-selector/mult-selector.component';
import { TableComponent } from './components/table/table.component';
import { NewTransactionComponent } from './components/new-transaction/new-transaction.component';



@NgModule({
  declarations: [
    InputComponent,
    MultSelectorComponent,
    TableComponent,
    NewTransactionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputComponent,
    MultSelectorComponent,
    TableComponent,
    NewTransactionComponent
  ]
})
export class SharedModule { }
