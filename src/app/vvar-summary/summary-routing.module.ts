import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from './summary.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: SummaryComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'photo',
        component: ProfileComponent
      },
      {
        path: 'form',
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryRoutingModule {

}