import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperModule } from 'ngx-image-cropper';

import { SummaryComponent } from './summary.component';
import { SummaryRoutingModule } from './summary-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SummaryComponent, ProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    SummaryRoutingModule,
    ImageCropperModule
  ]
})
export class SummaryModule { }
