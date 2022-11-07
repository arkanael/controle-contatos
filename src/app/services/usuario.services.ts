import { Injectable } from "@angular/core";
import { Usuario } from "../models/usuario.model";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService{

    //construtor com declaração das injeções de dependencia
    constructor(private httpCliente: HttpClient){

    }

    //função para executar a chamada de cadastro de usuario na api
    postRegister(data:any) :Observable<Usuario>{
        return this.httpCliente.post<Usuario>(`${environment.apiContatos}/api/register`, data);
    } 

}