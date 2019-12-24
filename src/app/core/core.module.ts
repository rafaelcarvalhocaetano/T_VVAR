import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from './service/transaction.service';



@NgModule({
  imports: [CommonModule],
  providers: [TransactionService]
})
export class CoreModule { }
