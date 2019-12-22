import { Component } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'vvar-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements ControlValueAccessor {


  private dataValue: string;
  public isDisabled: boolean;

  get value() {
    return this.dataValue;
  }

  set value(data: string) {
    this.dataValue = data;
  }

  public onChange: (_: string) => void = () => {};
  public onTouched: (_: string) => void = () => {};

  writeValue(data: string): void {
    if (data !== this.dataValue) {
      this.value = data;
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
