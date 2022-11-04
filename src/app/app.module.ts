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

//importando a biblioteca utilizada para realizar as chamadas para a API import
import { HttpClientModule } from '@angular/common/http';

import { EdicaoClienteComponent } from './edicao-cliente/edicao-cliente.component';
import { MenuPrincipalComponent } from './components/shared/menu-principal/menu-principal.component';
import { LoginComponent } from './components/pages/account/login/login.component';
import { RegisterComponent } from './components/pages/account/register/register.component';
import { PasswordComponent } from './components/pages/account/password/password.component';

//mapeando as rotas do projeto (caminhos para exibir componentes)
const appRoutes : Routes = [ 
  { path: '', pathMatch: 'full', redirectTo: 'acessar-conta' },
  { path: 'acessar-conta', component: LoginComponent },
  { path: 'criar-conta', component: RegisterComponent },
  { path: 'recuperar-senha', component: PasswordComponent },
  { path : 'cadastrar-cliente', component : CadastrarClienteComponent }, 
  { path : 'consultar-cliente', component : ConsultarClienteComponent } 
];

@NgModule({
  declarations: [
    AppComponent,
    CadastrarClienteComponent,
    ConsultarClienteComponent,
    EdicaoClienteComponent,
    MenuPrincipalComponent,
    LoginComponent,
    RegisterComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes), //registrando as rotas
    FormsModule, //registrando a biblioteca de formulários 
    ReactiveFormsModule, //registrando a biblioteca de formulários
    HttpClientModule //realizar chamadas HTTP para API
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
