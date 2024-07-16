import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-de-aluno',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro-de-aluno.component.html',
  styleUrls: ['./cadastro-de-aluno.component.scss'],
})
export class CadastroDeAlunoComponent implements OnInit {
  formCadastroAluno!: FormGroup;
  cursos: string[] = ['Tecnologia da Informação', 'Administração', 'Marketing'];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.formCadastroAluno = new FormGroup({
      nomeCompleto: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      celular: new FormControl('', Validators.required),
      curso: new FormControl('', Validators.required),
    });

    this.route.queryParams.subscribe((params) => {
      const state = window.history.state;
      console.log('Estado de navegación:', state);

      if (state && state.usuario) {
        this.preencherFormulario(state.usuario);
      }
    });
  }

  preencherFormulario(usuario: any) {
    this.formCadastroAluno.patchValue({
      nomeCompleto: usuario.nomeCompleto,
      cpf: usuario.cpf,
      email: usuario.email,
      celular: usuario.celular,
      curso: usuario.curso,
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.formCadastroAluno.get(fieldName);
    return !!field && field.invalid && (field.dirty || field.touched);
  }

  salvarAluno() {
    if (this.formCadastroAluno.valid) {
      const aluno = this.formCadastroAluno.value;
      this.atualizarLocalStorage(aluno);
      console.log('Usuário salvo com sucesso');
      this.router.navigate(['/listagem-usuarios']);
    } else {
      window.alert('Por favor, preencha todos os campos obrigatórios');
    }
  }

  atualizarLocalStorage(aluno: any) {
    let alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
    const alunoIndex = alunos.findIndex((a: any) => a.cpf === aluno.cpf);

    if (alunoIndex >= 0) {
      // Actualizar el registro existente
      alunos[alunoIndex] = aluno;
    } else {
      // Agregar un nuevo registro
      alunos.push(aluno);
    }

    localStorage.setItem('alunos', JSON.stringify(alunos));
  }
}
