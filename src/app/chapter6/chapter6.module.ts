import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { Chapter6PageRoutingModule } from './chapter6-routing.module';

import { Chapter6Page } from './chapter6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter6PageRoutingModule,
    TranslateModule
  ],
  declarations: [Chapter6Page]
})
export class Chapter6PageModule {}
