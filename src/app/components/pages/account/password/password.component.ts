import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.services';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private spinnerService:NgxSpinnerService) { }

  mensagem : string = "";

  ngOnInit(): void {
  }

  formPassword = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),

  });

  get form(): any {
    return this.formPassword.controls;
  }

  onSubmit(): void{
    this.mensagem = "";
    this.spinnerService.show();

    this.usuarioService.postasword(this.formPassword.value).subscribe({
      next: (response) => {
        this.mensagem = "Recuperação de senha realizada com sucesso.";
        this.spinnerService.hide();

      },
      error: (response) => {
        console.log(response);
        this.mensagem = "Não foi possível realizar a recuperação de senha.";
        this.spinnerService.hide();
      }
    });
  }
}
