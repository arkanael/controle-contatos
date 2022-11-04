import { AbstractControl } from "@angular/forms";

export class PasswordMatchValidator{

    //método para executar a validação
    static MatchPassword(abstractControl: AbstractControl) {

        //capturar os campos do formulário que serão validados
        let senha = abstractControl.get('senha')?.value;
        let senhaConfirmacao = abstractControl.get('senhaConfirmacao')?.value;

        //verificar se os valores são diferentes
        if (senhaConfirmacao.length > 0 && senha != senhaConfirmacao) {

            //gerar um erro de validação no campo 'senhaConfirmacao'
            abstractControl.get('senhaConfirmacao')?.setErrors({
                
                //nome do erro que será gerado
                MatchPassword: true
            });
        }

        return null; //validação está correta pois não tem erro de validação
    }
}