import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public titulo: string = 'bases';
  public numero: number = 0;
  public base: number = 5;

  acumular( valor: number) {
      this.numero += valor
  }

  
}
