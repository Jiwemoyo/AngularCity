import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  nombre:string = "Alessandro"
  rol:string ="Desarrollador Frontend"

  cambio2(){
    this.rol = this.rol ==="Desarrollador Frontend"? "Desarrollador FullStack":"Desarrollador Frontend"
  }
}
