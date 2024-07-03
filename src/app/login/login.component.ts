import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', Validators.required),
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.formLogin.get(fieldName);
    return !!field && field.invalid && (field.dirty || field.touched);
  }

  login() {
    if (this.formLogin.valid) {
      this.router.navigate(['/home']);
    } else {
      window.alert('Por favor, preencha os campos');
    }
  }

  recuperarSenha() {
    window.alert('Processo de recuperação de senha enviado para o e-mail cadastrado');
  }
}
