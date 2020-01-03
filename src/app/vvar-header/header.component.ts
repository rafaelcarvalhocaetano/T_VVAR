import { Component } from '@angular/core';

@Component({
  selector: 'vvar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public show: boolean;

  public showSideNav() {
    this.show = true;
  }

  closed(event: boolean) {
    this.show = event;
  }



}
