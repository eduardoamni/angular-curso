import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>Hola {{ titulo }}</h1>
        <h1>La base es {{ base }}</h1>

        <button (click)="acumular(base)">+1</button>
        <span> {{ numero }}</span>
        <button (click)="acumular(-base)">-1</button>
    
    `,
    
  styleUrls: ['../../app.component.scss']
})
export class ContadorComponent {

    public titulo: string = 'Contador App';
    public base: number = 5;
    public numero: number = 0;

    acumular(valor: number):void{
           this.numero += valor;
    }
}