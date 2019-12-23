import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vvar-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public list = [
    {id: 1, sinal: '-', desc: 'Lorem ipsum vai logo essa merda ', value: '12.000,00'},
    {id: 1, sinal: '-', desc: 'PC', value: '12.000,00'},
    {id: 1, sinal: '-', desc: 'PC', value: '12.000,00'},
    {id: 1, sinal: '-', desc: 'PC', value: '12.000,00'},
    {id: 1, sinal: '-', desc: 'PC', value: '12.000,00'},
    {id: 1, sinal: '-', desc: 'PC', value: '12.000,00'},
    {id: 1, sinal: '-', desc: 'PC', value: '12.000,00'},
    {id: 1, sinal: '-', desc: 'PC', value: '12.000,00'},
    {id: 1, sinal: '-', desc: 'PC', value: '12.000,00'},
    {id: 1, sinal: '-', desc: 'PC', value: '12.000,00'},
    {id: 1, sinal: '-', desc: 'PC', value: '12.000,00'},
    {id: 1, sinal: '-', desc: 'PC', value: '12.000,00'},
    {id: 1, sinal: '-', desc: 'PC', value: '12.000,00'},
    {id: 1, sinal: '-', desc: 'PC', value: '12.000,00'},
    {id: 1, sinal: '-', desc: 'PC', value: '12.000,00'},
    {id: 1, sinal: '-', desc: 'PC', value: '12.000,00'},
    {id: 1, sinal: '-', desc: 'PC', value: '12.000,00'},
    {id: 1, sinal: '-', desc: 'PC', value: '12.000,00'},
    {id: 1, sinal: '-', desc: 'PC', value: '12.000,00'},
    {id: 1, sinal: '-', desc: 'PC', value: '12.000,00'},
  ];


  constructor() { }

  ngOnInit() {
  }

}
