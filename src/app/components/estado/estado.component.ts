import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-estado',
  standalone: true,
  imports: [],
  templateUrl: './estado.component.html',
  styleUrl: './estado.component.css'
})
export class EstadoComponent implements OnInit,OnChanges,OnDestroy {

  @Input() nombre = ""
  private intervaloId: number | undefined;
  contador = 0

  constructor(){
    console.log('🛠️ Constructor - Componente creado pero no inicializado')
  }

  ngOnInit(): void {
    console.log('✅ ngOnInit - Inicialización del componente');
    console.log('✅ ngOnInit - Iniciando contador');
    this.intervaloId = window.setInterval(() => {
      this.contador++;
      console.log(`Contador: ${this.contador}`);
    }, 1000); // Cada 1 segundo
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('🔁 ngOnChanges - Cambio detectado:', changes);
  }

  ngOnDestroy(): void {
    console.log('💀 ngOnDestroy - Componente destruido');
    if (this.intervaloId) {
      clearInterval(this.intervaloId);
    }
  }

}
