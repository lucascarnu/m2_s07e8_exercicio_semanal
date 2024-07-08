import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ListagemUsuariosComponent implements OnInit {
  usuarios: any[] = [];
  usuariosFiltrados: any[] = [];
  filtro: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios(): void {
    const usuariosStorage = localStorage.getItem('alunos');
    this.usuarios = usuariosStorage ? JSON.parse(usuariosStorage) : [];
    this.usuariosFiltrados = [...this.usuarios];
  }

  pesquisar(): void {
    if (this.filtro.trim() !== '') {
      this.usuariosFiltrados = this.usuarios.filter(
        (usuario) =>
          usuario.nomeCompleto.toLowerCase().includes(this.filtro.toLowerCase()) ||
          usuario.email.toLowerCase().includes(this.filtro.toLowerCase())
      );
    } else {
      this.usuariosFiltrados = [...this.usuarios];
    }
  }

  editarUsuario(usuario: any): void {
    console.log('Usuario a editar:', usuario); // Verifica los datos del usuario en la consola
    this.router.navigate(['/cadastro-aluno'], { state: { usuario } });
  }

  excluirUsuario(usuario: any): void {
    if (confirm('Quer mesmo excluir este usuário?')) {
      this.usuarios = this.usuarios.filter((u) => u !== usuario);
      this.usuariosFiltrados = [...this.usuarios];
      localStorage.setItem('alunos', JSON.stringify(this.usuarios));
    }
  }
}
