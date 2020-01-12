import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { SettingRoutingModule } from './setting-routing.module';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SettingComponent,
    ModalEditComponent
  ],
  entryComponents: [
    ModalEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
