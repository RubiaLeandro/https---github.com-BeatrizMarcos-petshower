import { Injectable } from '@angular/core';
import { Agendamento, Dados, Entrada, Informações, Transporte, DadosService} from './dados.service';

@Injectable({
  providedIn: 'root'
})
export class RascunhosService {
  public entradas: Entrada[] = [];
  public rascunho: Entrada;

  public addAgendamento(a: Agendamento) {
    this.rascunho.agendamento = a;
  }

  addInformações(i: Informações) {
    this.rascunho.informacoes = i;
  }

  addTransporte(t: Transporte) {
    this.rascunho.transporte = t;
  }

  addDados(d: Dados) {
    this.rascunho.dados = d;
    this.dadosService.addEntrada(this.rascunho);
    this.startRascunho();
  }

  public startRascunho() {
    this.rascunho = {
      agendamento: null,
      dados: null,
      informacoes: null,
      transporte: null,
      id: 0
    }
  }
  constructor(private dadosService: DadosService){}

}