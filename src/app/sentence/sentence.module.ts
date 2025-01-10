import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SentencePageRoutingModule } from './sentence-routing.module';

import { SentencePage } from './sentence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SentencePageRoutingModule,
    TranslateModule
  ],
  declarations: [SentencePage]
})
export class SentencePageModule {}
