import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeforeexamPage } from './beforeexam.page';

const routes: Routes = [
  {
    path: '',
    component: BeforeexamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeforeexamPageRoutingModule {}
