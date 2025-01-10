import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { Chapter8PageRoutingModule } from './chapter8-routing.module';

import { Chapter8Page } from './chapter8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter8PageRoutingModule,
    TranslateModule
  ],
  declarations: [Chapter8Page]
})
export class Chapter8PageModule {}
