import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, of, observable, Subscription, map, filter, tap, range, BehaviorSubject, Subject } from "rxjs";

@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs-page.component.html'
})
export class RXJSPageComponent implements OnInit, OnDestroy {
    
    items: Array<number> = []
    
    subscription!: Subscription

    observable = interval(1000)
    observable2 = range(1, 10)
    subject = new BehaviorSubject("Valor inicial")
    ultimoEvento = ""
    contador = 1;
    constructor() { }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    
    ngOnInit() {
        /*this.subscription = this.observable
        .pipe(
            map((x:number) => x * 2),
            tap((x) => console.log(x)),
            filter(x => x <= 10),
        )
        .subscribe((item) => {
            this.items.push(item);
        })
        this.observable2.subscribe(item =>{
            this.items.push
        })*/
        this.subject.asObservable().subscribe((item) => {
            this.ultimoEvento = item
        })
    }
    desinscrever () {
        this.subscription.unsubscribe()
    }
 

    emitirEvento() {
        this.subject.next("Proximo item " + this.contador)
        this.contador++
    }
} 