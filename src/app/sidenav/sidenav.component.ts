import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vvar-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @Input() show: boolean;
  @Output() isClosed = new EventEmitter<boolean>();

  public list = [
    {
      path: '/summary',
      name: 'Summary'
    },
    {
      path: '/dashboard',
      name: 'Dashboard'
    },
    {
      path: '/setting',
      name: 'Configurações'
    }
  ];

}
