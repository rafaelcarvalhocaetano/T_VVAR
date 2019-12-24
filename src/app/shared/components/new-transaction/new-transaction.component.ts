import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TransactionService } from 'src/app/core/service/transaction.service';
import { Transaction } from 'src/app/core/model/transaction';

@Component({
  selector: 'vvar-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss']
})
export class NewTransactionComponent implements OnInit {

  @Input() public title: string;
  @Input() public btnText: string;
  @Output() public sendValue = new EventEmitter<{total: number, list: Transaction[]}>();

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: TransactionService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      transaction: [null],
      product: [null],
      price: [null]
    });
  }

  public create() {
    const data = this.form.get('price').value.replace(/[.]/g, '');
    this.form.get('price').setValue(data.replace(',', '.'));
    this.service.create(this.form.value);
    this.form.reset();
    this.getList();
  }

  public getList() {
    const getPrice = [];
    let total: number;
    if (this.service.findAll() !== null) {
      this.service.findAll().map(x => {
        getPrice.push(Number(x.price));
        total = getPrice.reduce((acc, cv) => acc + cv);
      });
      this.getSend(total, this.service.findAll());
    }
  }

  private getSend(v: number, getList: Transaction[]) {
    this.sendValue.emit({
      total: v,
      list: getList
    });
  }

}
