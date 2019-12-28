import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      transaction: [null, [Validators.required]],
      product: [null, [Validators.required]],
      price: [null, [Validators.required]]
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
    const getMore = [];
    const getLess = [];
    let more: number;
    let less: number;
    let total: number;
    if (this.service.findAll() !== null) {
      this.service.findAll().map(x => {
        if (x.transaction === 'Compra') {
          getMore.push(Number(x.price));
          more = getMore.reduce((acc, cv) => acc + cv);
        } else {
          getLess.push(Number(x.price));
          less = getLess.reduce((acc, cv) => acc - cv);
        }

        if (more > less) {
          total = more - less;
        } else if (more === less) {
          total = less - more;
        } else {
          total = less - more;
        }
        if (x.transaction !== 'Compra') {
          total = total - x.price;
        }
      });
      this.send(total, this.service.findAll());
    }
  }

  private send(value: number, getList: Transaction[]) {
    this.sendValue.emit({
      total: value,
      list: getList
    });
  }

}
