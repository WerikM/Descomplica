import { Component } from "@angular/core";

@Component({
    selector: 'app-client-list',
    templateUrl: './client-list-page.component.html'
})
export class ClientListPage {
    clientePremium = true
    items = ['teste']
    teste = 'Teste'
    clients = [{id: 1, nome: 'Client 1'}, {id: 2, nome: 'Client 2'}]
}