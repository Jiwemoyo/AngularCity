import { Routes } from '@angular/router';
import { AcercaComponent } from './components/routing/acerca/acerca.component';
import { ContactoComponent } from './components/routing/contacto/contacto.component';
import { InicioComponent } from './components/routing/inicio/inicio.component';

export const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"acerca",component:AcercaComponent},
  {path:"contacto",component:ContactoComponent}
];
