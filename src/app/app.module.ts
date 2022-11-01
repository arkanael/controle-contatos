import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';

//importando as bibliotecas de rotas do angular 
import { RouterModule, Routes } from '@angular/router'; 

//importando as bibliotecas para manipulação de formulários
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//mapeando as rotas do projeto (caminhos para exibir componentes)
const appRoutes : Routes = [ 
  { path : 'cadastrar-cliente', component : CadastrarClienteComponent }, 
  { path : 'consultar-cliente', component : ConsultarClienteComponent } 
];

@NgModule({
  declarations: [
    AppComponent,
    CadastrarClienteComponent,
    ConsultarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes) //registrando as rotas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
