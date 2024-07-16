import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.scss'],
})
export class DisciplinasComponent implements OnInit {
  alunos: any[] = [];
  selectedAluno = new FormControl();
  curso: string = '';
  semestres: { [key: string]: string[] } = {};
  semestresKeys: string[] = [];

  cursosDisciplinas: { [key: string]: { [key: string]: string[] } } = {
    'Tecnologia da Informação': {
      '1º Semestre': ['Redes de Computadores', 'Banco de Dados'],
      '2º Semestre': ['Programação em Java', 'Desenvolvimento Web'],
    },
    Administração: {
      '1º Semestre': ['Gestão Empresarial', 'Contabilidade Geral'],
      '2º Semestre': ['Finanças Corporativas', 'Recursos Humanos'],
    },
    Marketing: {
      '1º Semestre': ['Mídia e Comunicação', 'Técnicas de Vendas'],
      '2º Semestre': ['Marketing Digital', 'Planejamento Estratégico'],
    },
  };

  ngOnInit(): void {
    this.alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
    this.selectedAluno.valueChanges.subscribe((aluno) => {
      if (aluno) {
        this.atualizarCursoESemestres(aluno.curso);
      } else {
        this.limparCursoESemestres();
      }
    });
  }

  private atualizarCursoESemestres(curso: string): void {
    this.curso = curso;
    this.semestres = this.cursosDisciplinas[this.curso] || {};
    if (this.semestres) {
      this.semestresKeys = Object.keys(this.semestres);
    } else {
      this.semestresKeys = [];
    }
  }

  private limparCursoESemestres(): void {
    this.curso = '';
    this.semestres = {};
    this.semestresKeys = [];
  }
}
