import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordMatchValidator } from 'src/app/validators/password-match.validator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //declarar e inicializar o httpclient
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  //estrutura de formulario
  formRegister = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    senhaConfirmacao: new FormControl('', [Validators.required])
   },
   //incluir as validações customizadas para este formulário
   {
    validators: [PasswordMatchValidator.MatchPassword]
    });

   //função para ler os campos do formulário
   get form():any{
    return this.formRegister.controls;
   }

   //função para capturar p submit do formulário
   onSubmit():void{
    console.log(this.formRegister.value);

    //fazer uma requizição post para o serviço de cadastro de usuario
    this.httpClient.post('http://localhost:64589/api/Register', 
      this.formRegister.value
    ).subscribe({
      
      //capturar o retorno de sucesso (HTTP 2xx)
      next:(response)=>{
        console.log(response);
        this.formRegister.reset();
      },

      //capturar o erro (HTTP 4xx, 5xx)
      error:(response)=>{
        console.log(response.error);
      }
    });
   }

}
