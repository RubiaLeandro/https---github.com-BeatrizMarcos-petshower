import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Informações, DadosService } from 'src/app/services/dados.service';
import { RascunhosService} from 'src/app/services/rascunhos.service'

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.page.html',
  styleUrls: ['./informacoes.page.scss'],
})
export class InformacoesPage {

  public newDados: Informações = {
    pesoValue: '',
    racaValue: '',
  };


  constructor(private dadosService: DadosService, private rascunhosService: RascunhosService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  public save() {
    this.rascunhosService.addInformações(this.newDados);
  }

  verificacaoRaca(event): boolean {
    let pattern = /^([a-zA-Z ]*)$/;
    let result = pattern.test(event.key);
    return result;
  }
  
  verificacaoPeso(event): boolean {
    let pattern = /^([0-9-.]*)$/;
    let result = pattern.test(event.key);
    return result;
  }
}

