import { Component } from '@angular/core';
import { TransactionService } from '../core/service/service.service';

@Component({
  selector: 'vvar-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public dataModel = {
    title: 'Nova transação',
    btnText: 'Adicionar transação'
  };

  constructor(
    private service: TransactionService
  ) {  }

  public getData(event) {
    this.service.create(event);
  }

}
