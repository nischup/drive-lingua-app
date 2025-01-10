import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter5Page } from './chapter5.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter5PageRoutingModule {}
