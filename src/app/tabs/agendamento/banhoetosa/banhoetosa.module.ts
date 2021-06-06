import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BanhoetosaPageRoutingModule } from './banhoetosa-routing.module';

import { BanhoetosaPage } from './banhoetosa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BanhoetosaPageRoutingModule
  ],
  declarations: [BanhoetosaPage]
})
export class BanhoetosaPageModule {}
