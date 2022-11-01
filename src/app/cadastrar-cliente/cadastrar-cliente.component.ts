import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
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
