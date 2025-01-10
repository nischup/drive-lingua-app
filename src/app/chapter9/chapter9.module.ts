import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { Chapter9PageRoutingModule } from './chapter9-routing.module';

import { Chapter9Page } from './chapter9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter9PageRoutingModule,
    TranslateModule
  ],
  declarations: [Chapter9Page]
})
export class Chapter9PageModule {}
