import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {

  //atributos
  mensagem: string = "";

  //injeção de dependencia
  constructor(private httpCliente: HttpClient) { }

  ngOnInit(): void {
  }

  //criando o formulario
  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    cpf: new FormControl('', [Validators.required])
  });

  //função para retornar os controles do formulário
  get form(): any{
    return this.formCadastro.controls;
  }

  //função para capturar o submit do formulário
  onSubmit(): void{
    this.mensagem = "Processando requisição, por favor aguarde.";
    this.mensagem = "submit feito.";
    //imprimindo os valores
    console.log(this.formCadastro.value);

    //limpar o formulário
    this.formCadastro.reset();
  }

  cadastrarCliente(formCadastro : NgForm){
    this.mensagem = "Processando requisição, por favor aguarde.";

    //realizar chamada para api
    this.httpCliente.post("http://localhost:64589/api/Clientes", formCadastro.value)
      .subscribe(
        (data: any) =>{
          console.log(data);

          //imprimir mensagem de sucesso..
          this.mensagem = data.message;

          //limpar os campos
          formCadastro.reset();

        },
        e =>{ 
          console.log(e);
        }
      );
  }
}
