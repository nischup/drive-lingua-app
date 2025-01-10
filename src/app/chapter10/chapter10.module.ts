import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { Chapter10PageRoutingModule } from './chapter10-routing.module';

import { Chapter10Page } from './chapter10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter10PageRoutingModule,
    TranslateModule
  ],
  declarations: [Chapter10Page]
})
export class Chapter10PageModule {}
