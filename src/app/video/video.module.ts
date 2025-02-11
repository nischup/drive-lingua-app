import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoPageRoutingModule } from './video-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { VideoPage } from './video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoPageRoutingModule,
    TranslateModule 
  ],
  declarations: [VideoPage]
})
export class VideoPageModule {}
