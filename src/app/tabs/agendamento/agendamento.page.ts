import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Agendamento, DadosService } from 'src/app/services/dados.service';
import { RascunhosService} from 'src/app/services/rascunhos.service'



@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage {


  public newDados: Agendamento = {
    especieValue: null,
    sexoValue: null
  };


  constructor(private dadosService: DadosService, private rascunhosService: RascunhosService, private navCtrl: NavController) { }

  ngOnInit() {
    this.rascunhosService.startRascunho();
  }

  public save() {
    this.rascunhosService.addAgendamento(this.newDados);
  }
}








