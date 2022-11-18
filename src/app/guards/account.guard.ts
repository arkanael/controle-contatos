import { CanActivate} from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthHelper } from "../helpers/auth-helpers";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class AccountGuard implements CanActivate{

    constructor(private authHelper: AuthHelper, private router: Router){}
    
    canActivate() {
       
        //verificar se o usuario está autenticado
        //se sim o usuario é redicionado para a página de consulta de contato
        let auth = this.authHelper.getAuthData();
        if(auth != null){
            this.router.navigate(['/contatos-consulta'])
            return false; 
        }else{
            return true; 
        }
    }
}