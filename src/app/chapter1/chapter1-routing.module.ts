import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter1Page } from './chapter1.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter1PageRoutingModule {}
