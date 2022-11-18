import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { ContatoService } from 'src/app/services/contato.service'; 
import { NgxSpinnerService } from 'ngx-spinner'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edicao-cliente',
  templateUrl: './edicao-cliente.component.html',
  styleUrls: ['./edicao-cliente.component.css']
})
export class EdicaoClienteComponent implements OnInit {

  mensagem : string = '';
  constructor( private contatoService: ContatoService, private spinnerService: NgxSpinnerService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    //capturando o id enviado pela url
    let idContato = this.activatedRoute.snapshot.paramMap.get('id') as string;

    //consultar os dados do contato na API atraves do id
    this.contatoService.getContato(idContato).subscribe({
      next:(response) =>{

        this.spinnerService.hide();

        //preecher o formulario com os dados
        this.formContato.patchValue(response)
      },
      error:(response) =>{
        this.spinnerService.hide();
        this.mensagem = response.error;
        console.log(response.error);
      }
    });
  }

  formContato = new FormGroup({ 
    idContato: new FormControl('', []), 
    nome: new FormControl('', [Validators.required]), 
    email: new FormControl('', [Validators.required, Validators.email]), 
    telefone: new FormControl('', [Validators.required]), 
  });

  get form(): any { 
    return this.formContato.controls; 
  }

  onSubmit(): void{
    this.mensagem = '';
    this.spinnerService.show();
    
    this.contatoService.putContato(this.formContato.value).subscribe({
      next: (request) => {
        this.spinnerService.hide();
        this.formContato.reset();
        this.mensagem = `Contato atualizado com sucesso!`;
      },
    error: (error) => {
        this.spinnerService.hide();
        console.log(error);
      }
    })
  }

}
