import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vvar-selector',
  templateUrl: './mult-selector.component.html',
  styleUrls: ['./mult-selector.component.scss']
})
export class MultSelectorComponent implements OnInit {

  @Input()
  public title: string;

  constructor() { }

  ngOnInit() {
  }

}
