import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { ContatoService } from 'src/app/services/contato.service'; 
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthHelper } from 'src/app/helpers/auth-helpers';
import { Auth } from 'src/app/models/auth.model';

@Component({
  selector: 'app-contatos-cadastro',
  templateUrl: './contatos-cadastro.component.html',
  styleUrls: ['./contatos-cadastro.component.css']
})
export class ContatosCadastroComponent implements OnInit {

  //atributo 
  mensagem: string = '';

  constructor( private contatoService: ContatoService, private spinnerService: NgxSpinnerService, private authHelper: AuthHelper ) { }

  ngOnInit(): void {
  }

  formContato = new FormGroup({
    
    //campo nome
    nome: new FormControl('', [Validators.required]),

    //campo: email
    email: new FormControl('', [Validators.required, Validators.email]),

    //campo telefone
    telefone: new FormControl('', [Validators.required])
  });

  get form(): any {
    return this.formContato.controls;
  }

  onSubmit(): void {
    this.mensagem = '';
    this.spinnerService.show();
    
    this.contatoService.postContato(this.formContato.value).subscribe({
      next: (request) => {
        this.spinnerService.hide();
        this.formContato.reset();
        this.mensagem = `Contato ${request.nome} cadastrado com sucesso!`;
      },
    error: (error) => {
        this.spinnerService.hide();
        console.log(error);
      }
    })
  }
}
