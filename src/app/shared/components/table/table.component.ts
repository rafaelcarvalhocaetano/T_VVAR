import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/core/model/transaction';

@Component({
  selector: 'vvar-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() public list: Transaction[];
  @Input() public total: number;

}
