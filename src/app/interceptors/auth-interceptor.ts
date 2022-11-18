import { Injectable } from "@angular/core";
import { AuthHelper } from "../helpers/auth-helpers";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor{

    constructor(private authHelper: AuthHelper){}

    //método para implementar o interceptardor
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Interceptor");
        //verificar se a requisição que o httpCliente está fazendo para API
        //é para o endpoint /api/contatos
        if(req.url.includes("/api/contato")){
            console.log("Interceptor [/api/contato]");
            //recuperando o usuario autenticado no sistema
            let auth = this.authHelper.getAuthData();
            console.log(auth?.accessToken)
            //enviar o tokn para a requisição da API
            req = req.clone({
                setHeaders: { Authorization: `Bearer ${auth?.accessToken}` }
            });
        }

        return next.handle(req);
    }
}
