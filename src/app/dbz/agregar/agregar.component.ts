import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo : any = {};

  // @Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor( private dbzService: DbzService){}

  agregar( ){
    if(this.nuevo.nombre.trim().length === 0){return;}
    
    // this.onNewPersonaje.emit(this.nuevo)

    this.dbzService.agregarPersonajes( this.nuevo );

    this.nuevo={nombre:'', poder:0}




    
  }

  cambiarNombre( event:any ){
    console.log(event.target.value)
  }


}
