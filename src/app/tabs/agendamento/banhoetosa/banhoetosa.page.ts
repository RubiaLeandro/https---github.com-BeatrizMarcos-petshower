import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Dados, DadosService } from 'src/app/services/dados.service';
import { RascunhosService} from 'src/app/services/rascunhos.service';


@Component({
  selector: 'app-banhoetosa',
  templateUrl: './banhoetosa.page.html',
  styleUrls: ['./banhoetosa.page.scss'],
})
export class BanhoetosaPage {

  public newDados: Dados = {
    agendamentoValue: 'Banho e Tosa',
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