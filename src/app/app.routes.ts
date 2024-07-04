import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CadastroDeAlunoComponent } from './cadastro-de-aluno/cadastro-de-aluno.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { ListagemUsuariosComponent } from './listagem-usuarios/listagem-usuarios.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'alunos',
    component: AlunosComponent,
  },
  {
    path: 'cadastro-aluno',
    component: CadastroDeAlunoComponent,
  },
  {
    path: 'disciplinas',
    component: DisciplinasComponent,
  },
  {
    path: 'listagem-usuarios',
    component: ListagemUsuariosComponent,
  },
];
