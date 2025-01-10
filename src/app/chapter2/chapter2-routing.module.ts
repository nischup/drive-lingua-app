import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter2Page } from './chapter2.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter2PageRoutingModule {}
