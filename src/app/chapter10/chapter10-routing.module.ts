import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter10Page } from './chapter10.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter10PageRoutingModule {}
