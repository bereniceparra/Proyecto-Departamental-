
import { Component } from '@angular/core';


@Component ({ 
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent{ 

  mostrar = true;

  frase: any = {
    mensaje: 'AUTOS MAS LUJOSOS',
    autor: 'EDER'
  };
  personajes: string[] = ['LAMBORGINI', 'BUGATI', ' FERRARI']
  i = 1; 
}