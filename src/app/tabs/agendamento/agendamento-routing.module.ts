import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendamentoPage } from './agendamento.page';

const routes: Routes = [
  {
    path: '',
    component: AgendamentoPage
  },
  {
    path: 'informacoes',
    loadChildren: () => import('./informacoes/informacoes.module').then( m => m.InformacoesPageModule)
  },
  {
    path: 'escolha',
    loadChildren: () => import('./escolha/escolha.module').then( m => m.EscolhaPageModule)
  },
  {
    path: 'consulta',
    loadChildren: () => import('./consulta/consulta.module').then( m => m.ConsultaPageModule)
  },
  {
    path: 'banho',
    loadChildren: () => import('./banho/banho.module').then( m => m.BanhoPageModule)
  },
  {
    path: 'banhoetosa',
    loadChildren: () => import('./banhoetosa/banhoetosa.module').then( m => m.BanhoetosaPageModule)
  },
  {
    path: 'tudo',
    loadChildren: () => import('./tudo/tudo.module').then( m => m.TudoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendamentoPageRoutingModule {}
