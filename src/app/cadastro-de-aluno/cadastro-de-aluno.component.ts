import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-de-aluno',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro-de-aluno.component.html',
  styleUrls: ['./cadastro-de-aluno.component.scss'],
})
export class CadastroDeAlunoComponent implements OnInit {
  formCadastroAluno!: FormGroup;
  cursos: string[] = ['Curso 1', 'Curso 2', 'Curso 3']; // Lista de cursos para o select

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.formCadastroAluno = new FormGroup({
      nomeCompleto: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      celular: new FormControl('', Validators.required),
      curso: new FormControl('', Validators.required),
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.formCadastroAluno.get(fieldName);
    return !!field && field.invalid && (field.dirty || field.touched);
  }

  salvarAluno() {
    if (this.formCadastroAluno.valid) {
      const aluno = this.formCadastroAluno.value;
      this.salvarNoLocalStorage(aluno);
      console.log('Usuário salvo com sucesso');
      this.router.navigate(['/listagem-usuarios']);
    } else {
      window.alert('Por favor, preencha todos os campos obrigatórios');
    }
  }

  salvarNoLocalStorage(aluno: any) {
    const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
    alunos.push(aluno);
    localStorage.setItem('alunos', JSON.stringify(alunos));
  }
}
