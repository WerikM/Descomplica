import { Injectable } from "@angular/core";
import { Pessoa } from "../model/Pessoa.model";
import { Observable, from, of, tap } from "rxjs";
//import { Httpclient, HttpHeaders} from '@angular/common/http'
import { Token } from "@angular/compiler";

const API_URL = "https://gorest.co.in/public/v2/users"
const TOKEN = "b29a1c6cd50779724dbd810843b935b3900ea28f54c08e21879a102d2fd6f2d1"
const AUTH_HEADER = "Authorization"

@Injectable({providedIn: 'root'})
export class PessoaService {
    
    id = 1;
    //constructor(private http: HttpClient) { }

    salvar(pessoa: Pessoa): Observable<Pessoa>{
        return of(pessoa)
    }

    buscar(id: string): Pessoa {
        const pessoa = localStorage.getItem('pessoa_' + id);
        return JSON.parse(pessoa ? pessoa : "{}")
    }
    editar(pessoa: Pessoa) {
         const pessoaJson = JSON.stringify(pessoa)
         localStorage.setItem('pessoa_' + pessoa.id, pessoaJson)
      }
}