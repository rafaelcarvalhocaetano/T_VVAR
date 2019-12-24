import { Injectable } from '@angular/core';
import { EXTTable } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  public findAll() {
    return JSON.parse(localStorage.getItem('List'));
  }

  public create(data: EXTTable) {
    const list = [];
    list.push(data);
    localStorage.setItem('List', JSON.stringify(list));
  }

  public delete() {
    return localStorage.removeItem('List');
  }
}
