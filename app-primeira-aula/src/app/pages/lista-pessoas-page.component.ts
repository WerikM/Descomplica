import { Component, OnInit } from "@angular/core";
import { PessoaService } from "../services/pessoas.service";
import { Observable } from "rxjs";
import { Pessoa } from "../model/pessoa";

@Component({
    selector: 'app-lista-pessoa',
    templateUrl: './lista-pessoas-page.component.html'
})

export class ListaPessoasPage implements OnInit {
    pessoas!: Observable<Pessoa[]>

    constructor(private service: PessoaService) { }

    ngOnInit() {
        
    }
    salvar(pessoa: Pessoa) {
        this.service.salvar(pessoa)
    }

    listar() {
        this.pessoas = this.service.listar()
    }
}