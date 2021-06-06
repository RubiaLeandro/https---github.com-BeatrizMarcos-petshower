import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BanhoPage } from './banho.page';

const routes: Routes = [
  {
    path: '',
    component: BanhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanhoPageRoutingModule {}
