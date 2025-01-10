import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { TestAnswerPageRoutingModule } from './test-answer-routing.module';

import { TestAnswerPage } from './test-answer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestAnswerPageRoutingModule,
    TranslateModule
  ],
  declarations: [TestAnswerPage]
})
export class TestAnswerPageModule {}
