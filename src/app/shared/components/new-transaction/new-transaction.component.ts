import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'vvar-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss']
})
export class NewTransactionComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public btnText: string;

  @Output()
  public senForm = new EventEmitter<any>();

  public form: FormGroup;

  constructor(
    private fb: FormBuilder
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
    this.senForm.emit(this.form.value);
    console.log('ddd ', this.form.value);
  }

}
