import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BanhoPageRoutingModule } from './banho-routing.module';

import { BanhoPage } from './banho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BanhoPageRoutingModule
  ],
  declarations: [BanhoPage]
})
export class BanhoPageModule {}
