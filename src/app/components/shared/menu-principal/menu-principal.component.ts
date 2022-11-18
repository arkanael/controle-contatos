import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthHelper } from 'src/app/helpers/auth-helpers';
import { Auth } from 'src/app/models/auth.model';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  //armazenar os dados do usuaário autenticado
  auth: Auth | null  = null;

  constructor(private authHelper: AuthHelper,
              private spinnerService: NgxSpinnerService
  ) { }

  //método executado antes do componente abrir
  ngOnInit(): void {

    //capturando o usuário autenticado na aplicação
    this.auth = this.authHelper.getAuthData();
  }

  logout(){
    if(window.confirm('Deseja sair da sua conta')){
      this.authHelper.signOut();
      window.location.href = "/acessar-conta"
    }
  }

}
