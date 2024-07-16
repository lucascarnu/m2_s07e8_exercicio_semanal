import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Adicione CommonModule aqui
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  proximasAtividades = [
    { titulo: 'Entrega de trabalho da disciplina X', data: '20/07/2024', imagem: 'assets/images/atividade1.jpg' },
    { titulo: 'Avaliação da disciplina Y', data: '25/07/2024', imagem: 'assets/images/atividade2.jpg' },
    { titulo: 'Chat com o mentor', data: '30/07/2024', imagem: 'assets/images/atividade3.jpg' },
  ];

  minhasDisciplinas = [
    { titulo: 'Disciplina 1', descricao: 'Descrição da disciplina 1', imagem: 'assets/images/disciplina1.jpg' },
    { titulo: 'Disciplina 2', descricao: 'Descrição da disciplina 2', imagem: 'assets/images/disciplina2.jpg' },
  ];

  cursosExtras = [
    { titulo: 'Curso extra 1', descricao: 'Descrição do curso extra 1', imagem: 'assets/images/curso1.jpg' },
    { titulo: 'Curso extra 2', descricao: 'Descrição do curso extra 2', imagem: 'assets/images/curso2.jpg' },
  ];
}
