import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { ChapterPageRoutingModule } from './chapter-routing.module';

import { ChapterPage } from './chapter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChapterPageRoutingModule,
    TranslateModule
  ],
  declarations: [ChapterPage]
})
export class ChapterPageModule {}
