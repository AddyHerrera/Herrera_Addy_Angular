import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  constructor(private loginService:LoginService){
  
  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCSIxes2u5vOGKHmtnba0J9T5yVCcZ7HAs",
      authDomain: "mis-clientes-a11cd.firebaseapp.com",
    });
  }

  estaLogueado(){
      return this.loginService.estaLogueado();
    }

    logout(){
      this.loginService.logout();
    }

  }


