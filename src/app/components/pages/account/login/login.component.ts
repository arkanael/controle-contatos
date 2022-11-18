import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.services';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthHelper } from 'src/app/helpers/auth-helpers'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensagem: string = '';

  constructor(private usuarioService: UsuarioService, 
              private spinnerService: NgxSpinnerService,
              private authHelper :AuthHelper
  ) { }

  //evento onde pode ser executado antes do component abrir
  ngOnInit(): void {
  }

  //construir a estrutura do formulário
  formLogin = new FormGroup({
    //campo: email
    email: new FormControl('', [Validators.required, Validators.email]),

    //campo senha
    senha: new FormControl('', [Validators.required])
  });

  //função para acessar e exibir os erros de validações do formulário
  get form(): any{
    return this.formLogin.controls;
  }

  //função para capturar o submit do formulário
  onSubmit(): void{
    //exibindo os valores dos campos do formulário no console
    console.log(this.form.value);

    this.spinnerService.show();

    this.usuarioService.postLogin(this.formLogin.value).subscribe({
      next:(auth) => {
        console.log(auth);
        this.spinnerService.hide();
        this.authHelper.singIn(auth);
        window.location.href = "/contatos-consulta"
      },
      error: (response) =>{
        console.log(response.error);
        this.spinnerService.hide();

        switch (response.status) {
          case 401:
            this.mensagem = response.error.message;
          break;
          default:
            this.mensagem = 'Falha ao autenticar, por favor tente mais tarde.';
          break;
        }    
      }
    });
  }
}
