import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendadosPageRoutingModule } from './agendados-routing.module';

import { AgendadosPage } from './agendados.page';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendadosPageRoutingModule
  ],
  providers: [
    SocialSharing,
  ],
  declarations: [AgendadosPage]
})
export class AgendadosPageModule {}
