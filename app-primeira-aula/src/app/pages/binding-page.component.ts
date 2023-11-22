import { Component } from "@angular/core";

@Component(
    {
        selector: 'app-binding',
        template: `
        <h1>Imagem do angular </h1>
        <img [src]="imagem" [style]="{width: width, height: height}" />
        <div class="alert" [class]="sucesso" [style.background-color]= "backgroundcolor">
            Alerta
        </div>
        <button (click)="enviarDados()" (mouseenter)="mousehover()">Enviar dados </button>
        `,
        styles:[
            `.alert {
                width: 200px;
                height:100px;
                border: 1px solid blue;
            }
            .sucess {
                border:5px solid green;
            }
            
            `
        ]
    }
)

export class BindingPageComponent {
    width= "150px"
    height= "200px"
    imagem = "https://angular.io/assets/images/logos/angular/angular.svg"
    backgroundcolor= "blue"
    sucesso = "outra classe"

    enviarDados() {
        //this.sucesso = !this.sucesso
        this.backgroundcolor= "red"
    }
    mousehover(){
        this.backgroundcolor= "violet"
    }
    
}