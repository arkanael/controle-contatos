import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { RouterModule, Routes } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';


//importando as bibliotecas para manipulação de formulários
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//importando a biblioteca utilizada para realizar as chamadas para a API import
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AuthInterceptor } from './interceptors/auth-interceptor';

import { ContatosGuard } from './guards/contatos.guard';
import { AccountGuard } from './guards/account.guard'

import { EdicaoClienteComponent } from './edicao-cliente/edicao-cliente.component';
import { MenuPrincipalComponent } from './components/shared/menu-principal/menu-principal.component';
import { LoginComponent } from './components/pages/account/login/login.component';
import { RegisterComponent } from './components/pages/account/register/register.component';
import { PasswordComponent } from './components/pages/account/password/password.component';
import { ContatosCadastroComponent } from './components/pages/contatos/contatos-cadastro/contatos-cadastro.component';
import { ContatosConsultaComponent } from './components/pages/contatos/contatos-consulta/contatos-consulta.component';
import { ContatosEdicaoComponent } from './components/pages/contatos/contatos-edicao/contatos-edicao.component';
import { AlertaMensagensComponent } from './components/shared/alerta-mensagens/alerta-mensagens.component';

export const options: Partial<IConfig | null> | (() => Partial<IConfig>) = null

//mapeando as rotas do projeto (caminhos para exibir componentes)
const appRoutes : Routes = [ 
  { path: '', pathMatch: 'full', redirectTo: 'acessar-conta' },
  { path: 'acessar-conta', component: LoginComponent, canActivate:[AccountGuard]},
  { path: 'criar-conta', component: RegisterComponent, canActivate:[AccountGuard]},
  { path: 'recuperar-senha', component: PasswordComponent, canActivate:[AccountGuard]},
  { path : 'cadastrar-cliente', component : CadastrarClienteComponent, canActivate: [ContatosGuard]}, 
  { path : 'consultar-cliente', component : ConsultarClienteComponent, canActivate: [ContatosGuard]},
  { path : 'contatos-cadastro', component : ContatosCadastroComponent, canActivate: [ContatosGuard]}, 
  { path : 'contatos-consulta', component : ContatosConsultaComponent, canActivate: [ContatosGuard]}, 
  { path : 'contatos-edicao/:id', component : ContatosEdicaoComponent, canActivate: [ContatosGuard] }, 

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
    PasswordComponent,
    ContatosCadastroComponent,
    ContatosConsultaComponent,
    ContatosEdicaoComponent,
    AlertaMensagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes), //registrando as rotas
    FormsModule, //registrando a biblioteca de formulários 
    ReactiveFormsModule, //registrando a biblioteca de formulários
    HttpClientModule, //realizar chamadas HTTP para API
    BrowserAnimationsModule, // ngx-spinner 
    NgxSpinnerModule, // ngx-spinner 
    NgxMaskModule.forRoot(),
    NgxPaginationModule,
    FilterPipeModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor,
      multi: true
    },
    ContatosGuard,
    AccountGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
