import { Injectable } from "@angular/core";
import { Auth } from "../models/auth.model";

@Injectable({providedIn: 'root'})
export class AuthHelper{

    //função para gravar os dados do usuário autenticado ma local storage do navegador
    singIn(auth: Auth) : void {
        
        //serializar os dados do objeto para json
        let json = JSON.stringify(auth);

        //gravar na local storage
        localStorage.setItem("auth_data", json);   
    }

    //função para ler na local storage e retornar como objeto
    getAuthData(): Auth | null {

        //ler o conteudo gravado na local storage
        let json = localStorage.getItem("auth_data");

        //verificar se o valor não é vazio
        if(json != null){
            //deserializar o json para objeto
            let auth = JSON.parse(json) as Auth;

            //retornando o objeto
            return auth;
        }else{

            //retornar vazio
            return null;
        }
    }

    //função para apagar o conteudo gravado do usuário na local storage 
    signOut(): void{
        //apagar o conteudo da local storage
        localStorage.removeItem("auth_data");
    }
}