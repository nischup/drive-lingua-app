import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter8Page } from './chapter8.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter8PageRoutingModule {}
