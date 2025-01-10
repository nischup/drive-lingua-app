import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { Chapter1PageRoutingModule } from './chapter1-routing.module';

import { Chapter1Page } from './chapter1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter1PageRoutingModule,
    TranslateModule
  ],
  declarations: [Chapter1Page]
})
export class Chapter1PageModule {}
