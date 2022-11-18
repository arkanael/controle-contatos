import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alerta-mensagens',
  templateUrl: './alerta-mensagens.component.html',
  styleUrls: ['./alerta-mensagens.component.css']
})
export class AlertaMensagensComponent implements OnInit {

  @Input() 
  mensagem: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
