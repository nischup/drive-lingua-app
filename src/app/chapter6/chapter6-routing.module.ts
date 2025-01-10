import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter6Page } from './chapter6.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter6PageRoutingModule {}
