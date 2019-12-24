import { Injectable } from '@angular/core';
import { EXTTable } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  public list: any[] = [];


  public findAll() {
    return JSON.parse(localStorage.getItem('List'));
  }

  public create(data: EXTTable) {
    this.list.push(data);
    this.list.map(x => {
      if (x.transaction === 'compra') {
        x.sinal = '+';
      } else {
        x.sinal = '-';
      }
    });
    localStorage.setItem('List', JSON.stringify(this.list));
  }

  public delete() {
    return localStorage.removeItem('List');
  }
}
