import { Component } from '@angular/core';
import { ClientService } from './services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-primeira-aula';
  descricao1 = 'descricao';

  clientePremium = false;

  nome = "Joao alberto"

  valores = [{
    descricao: 'teste',
    nome: 'joao',
    id: 1
  },{
    descricao: 'descricao2',
    nome: 'nome2',
    id: 2
  }];

  umadata = new Date()

  umDinheiro = 10.5

  constructor(private clientService: ClientService) {} 

  adicionar() {
    this.valores.push({descricao: 'adicionado', nome: this.nome, id: 3})
  }

  sayHello() {
    alert(this.clientService.sayHello())
  }
}