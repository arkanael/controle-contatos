import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

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
  }

}
