import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'dashboard'
  },
  {
    path: '',
    children: [
      {
        path: 'dashboard', loadChildren: () => import('./vvar-dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'summary', loadChildren: () => import('./vvar-summary/summary.module').then(m => m.SummaryModule)
      },
      {
        path: 'setting', loadChildren: () => import('./vvar-setting/setting.module').then(m => m.SettingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
