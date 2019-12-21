import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vvar-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public readonly title = 'Controle financeiro';
  constructor() { }

  ngOnInit() {
  }

}
