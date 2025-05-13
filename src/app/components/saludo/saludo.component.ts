import { APP_ID, Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {

  nombre:string = "Alessandro"
  apellido:string = "Cisneros"

  cambioUno(){
    // let newname = this.nombre
    // this.nombre = this.apellido
    // this.apellido = newname
    [this.nombre,this.apellido] = [this.apellido,this.nombre]
  }

}
