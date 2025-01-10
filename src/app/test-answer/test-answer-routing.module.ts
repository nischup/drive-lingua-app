import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestAnswerPage } from './test-answer.page';

const routes: Routes = [
  {
    path: '',
    component: TestAnswerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestAnswerPageRoutingModule {}
