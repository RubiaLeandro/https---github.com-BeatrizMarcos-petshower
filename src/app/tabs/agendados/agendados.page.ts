import { Component, OnInit } from '@angular/core';
import { Entrada, DadosService } from 'src/app/services/dados.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-agendados',
  templateUrl: '/agendados.page.html',
  styleUrls: ['/agendados.page.scss'],
})
export class AgendadosPage {

   public entradas: Entrada[] = this.dadosService.entradas;

  constructor(private dadosService: DadosService, private socialSharing : SocialSharing,) { }

  compartilharAPP()
  {
    this.socialSharing.share('','','','https://petshower.netlify.app');
  }
}