import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SaludoComponent } from "./components/saludo/saludo.component";
import { PerfilComponent } from "./components/perfil/perfil.component";
import { ReaccionComponent } from "./components/reaccion/reaccion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SaludoComponent, PerfilComponent, RouterLink, ReaccionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ciudad-angular';
  mensajeRecibido = ''

  recibiendoMensaje(msm:string){
    this.mensajeRecibido = msm
  }
}
