import { Component, OnInit } from '@angular/core';
import { ContatoService } from 'src/app/services/contato.service';
import { Contato } from'src/app/models/contato.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contatos-consulta',
  templateUrl: './contatos-consulta.component.html',
  styleUrls: ['./contatos-consulta.component.css']
})
export class ContatosConsultaComponent implements OnInit {

  //atributos
  contatos: Contato[] = [];
  pagina: number = 1;
  filtro: any = { nome: '' };
  
  constructor(private contatoService: ContatoService, private spinnersService: NgxSpinnerService) { }

  //metodo que executar antes do component carregar
  ngOnInit(): void {

    this.spinnersService.show();

    this.contatoService.getContatos()
     .subscribe({
      next: (response) => {
        this.spinnersService.hide();
         this.contatos = response;
      },
      error: (response) => {
        this.spinnersService.hide();
        console.log(response);
      }
    })
  }

  //função para o componente de paginação 
  handlePageChange(event: any): void { 
    this.pagina = event; 
  }

}
