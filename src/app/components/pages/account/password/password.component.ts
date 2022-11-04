import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formPassword = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),

  });

  get form(): any {
    return this.formPassword.controls;
  }

  onSubmit(): void{
    console.log(this.formPassword.value);
  }

}
