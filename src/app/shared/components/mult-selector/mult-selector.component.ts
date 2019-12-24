import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'vvar-selector',
  templateUrl: './mult-selector.component.html',
  styleUrls: ['./mult-selector.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultSelectorComponent),
    multi: true
  }]
})
export class MultSelectorComponent implements ControlValueAccessor {


  private innerValue: string;

  @Input() public isDisabled?: boolean;
  @Input() public id = '';
  @Input() public label: string;
  public list = [
    {id: 1, desc: 'Compra'},
    {id: 2, desc: 'Venda'},
    {id: 3, desc: 'Devolução'},
  ];

  public onChange: (_: string) => void = () => {};
  public onTouched: (_: string) => void = () => {};

  get value() {
    return this.innerValue;
  }

  set value(data: string) {
    if (data !== this.innerValue) {
      this.innerValue = data;
      this.onChange(data);
    }
  }

  writeValue(data: string): void {
    if (data !== this.innerValue) {
      this.innerValue = data;
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
