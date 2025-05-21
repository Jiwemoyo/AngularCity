import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reaccion',
  standalone: true,
  imports: [],
  templateUrl: './reaccion.component.html',
  styleUrl: './reaccion.component.css'
})
export class ReaccionComponent {
  @Input() nombre = "Nombre de Usuario"
  @Output() mensaje = new EventEmitter<string>()

  mostrando(){
    this.mensaje.emit(`Hola soy ${this.nombre} y soy Desarrollador Front`)
  }
}
