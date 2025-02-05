import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { RegistrationInfoPageRoutingModule } from './registration-info-routing.module';

import { RegistrationInfoPage } from './registration-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationInfoPageRoutingModule,
    TranslateModule
  ],
  declarations: [RegistrationInfoPage]
})
export class RegistrationInfoPageModule {}
