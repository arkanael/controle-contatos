import { Injectable } from "@angular/core";
import { Usuario } from "../models/usuario.model";
import { Auth } from "../models/auth.model";
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

    //função para executar a chamada de login de usuario na API
    postLogin(data: any): Observable<Auth>{
        return this.httpCliente.post<Auth>(`${environment.apiContatos}/api/usuarios/login`, data);
    }

}