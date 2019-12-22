import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'vvar-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent implements ControlValueAccessor {


  private dataValue: string;

  @Input()
  public isDisabled?: boolean;

  @Input()
  public isPrice: boolean;

  @Input()
  public id = '';

  @Input()
  public label: string;

  @Input()
  public placeholder = '';

  get value() {
    return this.dataValue;
  }

  set value(data: string) {
    this.dataValue = data;
  }

  public onChange: (_: string) => void = () => {};
  public onTouched: (_: string) => void = () => {};

  getValue(data) {
    if (this.isPrice) {
      let price = data.replace(/\D/g, '');
      price = (+price / 100).toFixed(2) + '';
      price = price.replace('.', ',');
      price = price.replace(/(\d)(\d{3})(\d{3}),/g, '$1.$2.$3,');
      price = price.replace(/(\d)(\d{3}),/g, '$1.$2,');
      data = price;
    }
    this.dataValue = data;
  }
  writeValue(data: string): void {
    if (data !== this.dataValue) {
      this.dataValue = data;
      this.onChange(data);
    }
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (value: string) => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
