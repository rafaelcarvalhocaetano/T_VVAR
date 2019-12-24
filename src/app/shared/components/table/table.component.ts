import { Component, OnInit } from '@angular/core';

import { EXTTable } from '../../../core/model/transaction';
import { TransactionService } from 'src/app/core/service/service.service';


@Component({
  selector: 'vvar-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public list: EXTTable[] = [];
  public valueData: number;
  public listAll: [];

  constructor(
    private service: TransactionService
  ) { }

  ngOnInit() {
    this.get();
  }

  public get() {
    this.service.findAll().map((x: any, i: number) => {
      let total = 0;
      x.price = Number.parseInt(x.price);
      total = total + Number.parseFloat(x.price);
      this.valueData = total;
      this.list.push(x);
    });
  }

  public delete() {
    return this.service.delete();
  }

}
