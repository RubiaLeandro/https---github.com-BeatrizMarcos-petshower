import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Dados, DadosService } from 'src/app/services/dados.service';
import { RascunhosService} from 'src/app/services/rascunhos.service';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage {

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