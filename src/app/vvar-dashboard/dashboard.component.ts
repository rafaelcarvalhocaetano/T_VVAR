import { Component } from '@angular/core';
import { Transaction } from '../core/model/transaction';

@Component({
  selector: 'vvar-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public list: Transaction[] = [];
  public total: number;

  public dataModel = {
    title: 'Nova transação',
    btnText: 'Adicionar transação'
  };

  public listTable(event) {
    this.total = event.total;
    this.list = event.list;
  }

}
