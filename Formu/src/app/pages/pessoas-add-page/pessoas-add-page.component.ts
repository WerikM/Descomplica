import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from 'src/app/model/Pessoa.model';
import { PessoaService } from 'src/app/services/pessoas.service';
import { createCNPJValidator, createDateRangeValidator, createPasswordStrengthValidator, createCPFValidator } from 'src/app/validators';

//import { validateCpf } from 'src/app/validadores2';

@Component({
  selector: 'app-pessoas-add-page',
  templateUrl: './pessoas-add-page.component.html',
  styleUrls: ['./pessoas-add-page.component.css']
})
export class PessoasAddPageComponent {

  pessoa: any = {}

  hobles = [
    'Dançar',
    'Jogar futebol',
    'Passear',

  ]

  formGroup = this.formBuilder.group({
    id: this.formBuilder.control<number|null>(null),
    nome: [''],
    email: ['',Validators.compose([Validators.email, Validators.required])],
    hoble: [''],
    password: [''],
    startAt: [],
    endAt: [],
    cpf: ['', Validators.compose([Validators.required, createCPFValidator]) ],
    cnpj: ['', Validators.compose([Validators.required, createCNPJValidator])]
  }, {
    Validators: [createDateRangeValidator()]
  })

  constructor(private formBuilder: FormBuilder, private service: PessoaService, private activeRouter: ActivatedRoute) {}

    ngOnInit(): void{
      const id = this.activeRouter.snapshot.paramMap.get('id')
      if(id) {
        this.formGroup.patchValue(this.service.buscar(id))
      }
    }

  

  salvar() {
    if(this.formGroup.valid){
      if(this.formGroup.value.id) {
        this.service.editar(this.formToValue(this.formGroup))
      }else {
        this.service.salvar(this.formToValue(this.formGroup))
      .subscribe(p => {
        alert('pessoa salva com sucesso')
      })
      }
      
    }else {
      alert('Formulario inválido')
    }
    
  }
  isError(control: 'email' | 'nome' | 'hoble', validor: string) {
    return this.formGroup.controls[control].getError(validor) ? true : false
  }
  formToValue(form: typeof this.formGroup): Pessoa {
    return {
      id: form.value.id!,
      nome: form.value.nome!,
      email: form.value.email!,
      hoble: form.value.hoble!,
      cpf: form.value.cpf!,
      cnpj: form.value.cnpj!,
      startAt: form.value.startAt!,
      endAt: form.value.endAt!,
    }
  }
}
