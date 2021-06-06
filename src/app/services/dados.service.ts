import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Agendamento {
  especieValue: 'Cachorro' | 'Gato',
  sexoValue: 'Macho' | 'Fêmea',
}

export interface Informações {
  pesoValue: string;
  racaValue: string;
}

export interface Dados {
  agendamentoValue: string;
  diaValue: string;
  horaValue: string;
  veterinarioValue: string;
  motivoValue: string;
  profissionalValue: string;
}

export interface Transporte {
  enderecoValue: string;
  endereco2Value: string;
  enderecocertoValue: 'Sim' | 'Não',
}

export interface Entrada {
  id: number;
  dados: Dados;
  informacoes: Informações;
  agendamento: Agendamento;
  transporte: Transporte;
}

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  public entradas: Entrada[] = [];
  public rascunho: Entrada;

  private saveToStorage() {
    this.storage.set('entradas', this.entradas);
  }

  public addEntrada(newDados: Entrada) {
    newDados.id = 1 + Math.max(0, ...this.entradas.map(s => s.id));
    this.entradas.push(newDados);
    this.saveToStorage();
  }

  private async loadFromStorage() {
    const loadedDados = await this.storage.get('entradas');
    if (loadedDados) {
      this.entradas.push(...loadedDados);
    }
  }

  constructor(private storage: Storage) {
    this.loadFromStorage();
  }
 
}
