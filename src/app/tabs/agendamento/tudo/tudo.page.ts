import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Dados, DadosService } from 'src/app/services/dados.service';
import { RascunhosService} from 'src/app/services/rascunhos.service';


@Component({
  selector: 'app-tudo',
  templateUrl: './tudo.page.html',
  styleUrls: ['./tudo.page.scss'],
})
export class TudoPage {

  public newDados: Dados = {
    agendamentoValue: 'Consulta', 
    diaValue: '',
    horaValue: '',
    veterinarioValue: '',
    motivoValue: '',
    profissionalValue: '',
  };

  constructor(private dadosService: DadosService, private rascunhosService: RascunhosService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  public save() {
    this.rascunhosService.addDados(this.newDados);
  }
}