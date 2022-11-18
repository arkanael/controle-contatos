import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Contato } from "../models/contato.model";

@Injectable({providedIn: 'root'})
export class ContatoService{

    constructor(private httpClient: HttpClient){}

    //Cadastrar um Contato
    postContato(data: any):Observable<Contato>{
        return this.httpClient.post<Contato>(`${environment.apiContatos}/api/contato`, data);
    }

    //Autaliar um Contato
    putContato(data: any):Observable<Contato>{
        return this.httpClient.put<Contato>(`${environment.apiContatos}/api/contato`, data);
    }

    //excluir contatos
    deleteContatos(id: string):Observable<Contato>{
        return this.httpClient.delete<Contato>(`${environment.apiContatos}/api/contato/${id}`);
    }

    //consultar todos os contatos
    getContatos():Observable<Contato[]>{
        return this.httpClient.get<Contato[]>(`${environment.apiContatos}/api/contato/`);
    }

    //consultar 1 contato através do ID 
    getContato(id: string): Observable<Contato> { 
        return this.httpClient.get<Contato> (`${environment.apiContatos}/api/contato/${id}`); 
    }
}