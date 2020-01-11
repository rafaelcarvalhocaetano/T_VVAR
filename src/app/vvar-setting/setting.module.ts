import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { SettingRoutingModule } from './setting-routing.module';
import { ModalEditComponent } from './modal-edit/modal-edit.component';

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
    SettingRoutingModule
  ]
})
export class SettingModule { }
