import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'vvar-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  form: FormGroup;

  public isEdit: boolean;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      state: ['São Paulo'],
      country: ['Brasil'],
      phone_main: ['+55 11 90009 8866'],
      phone_alternative: ['+55 11 90000 1111']
    });
  }

  public edited() {
    this.isEdit = !this.isEdit;
  }

}
