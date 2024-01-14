import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'primera';
  logued: boolean = false;
  log: string = 'Logueate!!!';
  action: string = 'Conectar';
  colorFondo: string = 'colorFondoDesconectado';
  message: string = '';
  eventBox: string = '';

  login() {
    if (!this.logued) {
      this.logued = true;
      this.log = "Bienvenido!!!"
      this.action = 'Desconectar';
      this.colorFondo = 'colorFondoConectado';
      this.message = 'Te has logueado correctamente';
      this.eventBox = 'eventBoxDisconnect';
      setTimeout(() => {
        this.message = '';
        this.eventBox = '';
      }, 3000);
    } else {
      this.logued = false;
      this.log = "Logueate!!!"
      this.action = 'Conectar';
      this.colorFondo = 'colorFondoDesconectado';
      this.message = 'Te has desconectado correctamente';
      this.eventBox = 'eventBoxConnect';
      setTimeout(() => {
        this.message = '';
        this.eventBox = '';
      }, 3000);
    }
  }

  emergentBox() {
    if (!this.logued) {
      setTimeout(() => {}, 5000);
    }
  }
}
