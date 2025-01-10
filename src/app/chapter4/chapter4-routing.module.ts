import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter4Page } from './chapter4.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter4PageRoutingModule {}
