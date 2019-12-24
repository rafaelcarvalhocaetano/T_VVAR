import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TransactionService } from 'src/app/core/service/service.service';

@Component({
  selector: 'vvar-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss']
})
export class NewTransactionComponent implements OnInit {

  @Input() public title: string;
  @Input() public btnText: string;
  @Output() public sendValue = new EventEmitter<any>();

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


  public send() {
    const data = this.form.get('price').value.replace(/[^a-z0-9]/, '');
    this.form.get('price').setValue(data);
    this.sendValue.emit(this.form.value);
    this.form.reset();
  }

}
