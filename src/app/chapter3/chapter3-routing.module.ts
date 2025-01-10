import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter3Page } from './chapter3.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter3PageRoutingModule {}
