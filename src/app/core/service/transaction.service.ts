import { Injectable } from '@angular/core';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  public list: Transaction[] = [];

  public findAll() {
    return JSON.parse(localStorage.getItem('List'));
  }

  public create(data: Transaction) {
    this.list.push(data);
    this.list.map(x => {
      if (x.transaction === 'Compra') {
        x.sinal = '+';
      } else {
        x.sinal = '-';
      }
    });
    localStorage.setItem('List', JSON.stringify(this.list));
  }
}
