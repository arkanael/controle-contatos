import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordMatchValidator } from 'src/app/validators/password-match.validator';
import { UsuarioService } from 'src/app/services/usuario.services';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //atributos (campos que poderão acessar na página HTML)
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';

  //declarar e inicializar o httpclient
  constructor(private usuarioService: UsuarioService, 
              private spinnerService: NgxSpinnerService) { }

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

    //exibindo o Spinner
    this.spinnerService.show()

    //limpar as mensagens
    this.mensagem_sucesso = '';
    this.mensagem_erro = '';

    console.log(this.formRegister.value);

    //fazer uma requizição post para o serviço de cadastro de usuario
    this.usuarioService.postRegister(this.formRegister.value).subscribe({
      
      //capturar o retorno de sucesso (HTTP 2xx)
      next:(response)=>{
        console.log(response);
        this.formRegister.reset();
        this.spinnerService.hide();
      },

      //capturar o erro (HTTP 4xx, 5xx)
      error:(response)=>{
        console.log(response.error);
        switch (response.status) {
            case 422:
              this.mensagem_erro = response.error.message;
            break;
            default:
              this.mensagem_erro = 'Falha ao realizar cadastro, por favor tente mais tarde.';
            break;
          }

          this.spinnerService.hide();
      }
    });
   }

}
