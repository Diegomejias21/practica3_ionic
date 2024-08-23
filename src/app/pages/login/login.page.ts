import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ape: string = "Perez";
  edad: number = 26;

  arregloPersona: any = {
    nombre: 'José',
    apellido: 'Rodriguez',
    edad: 25
  }

  listaP: any = [
    {
      id: 1,
      comuna: 'huechuraba'
    },
    {
      id: 2,
      comuna: 'espejo'
    },
    {
      id: 3,
      comuna: 'independencia'
    }
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }
  irPagina(){
    //crear logica de programación
    //creamos la variable de contexto
    let navigationextras: NavigationExtras ={
      state:{
        apellido: this.ape,
        ed: this.edad,
        pers: this.arregloPersona
      }
    }
    this.router.navigate(['/agregar'], navigationextras);
  }

}
