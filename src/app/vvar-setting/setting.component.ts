import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vvar-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  public isOpenModal = false;
  public list = [
    'List ',
    'List ',
    'List ',
    'List ',
    'List ',
  ];

  constructor() { }

  ngOnInit() {
  }

  public open() {
    this.isOpenModal = !this.isOpenModal;
  }


  public getClosed(event: boolean): boolean {
    return this.isOpenModal = event;
  }

}
