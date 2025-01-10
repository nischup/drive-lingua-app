import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter9Page } from './chapter9.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter9PageRoutingModule {}
