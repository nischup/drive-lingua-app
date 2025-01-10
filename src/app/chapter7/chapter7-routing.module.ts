import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter7Page } from './chapter7.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter7PageRoutingModule {}
