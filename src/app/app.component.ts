import { Component } from '@angular/core';
import { variaveis } from 'src/variaveis';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo = 'CRUD de lembretes com Angular';
  vars = variaveis;
  imagem: string;

  constructor() {
    this.imagem = variaveis.imagensSrc + 'calendar1.png'
  }
}
