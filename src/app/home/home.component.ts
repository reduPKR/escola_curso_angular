import { Component, OnInit } from '@angular/core';
import { alunos } from '../models/alunos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  valor: number = 0;
  exibeTabela:  boolean = false;

  listaAlunos: alunos[] = [
    { nome: 'Teste 1', idade: 27, email: 'Teste1@gmail.com', curso: 'Ciencia da Computacao' },
    { nome: 'Teste 2', idade: 25, email: 'Teste2@gmail.com', curso: 'Analise e desenvolvimento de sistemas' },
    { nome: 'Teste 3', idade: 31, email: 'Teste3@gmail.com', curso: 'Engenharia da computacao' },
    { nome: 'Teste 4', idade: 45, email: 'Teste4@gmail.com', curso: 'Sistemas da informacao' }
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
    this.valor = 5;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela(){
    this.exibeTabela = true;
  }
}
