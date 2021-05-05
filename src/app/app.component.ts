import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  darkMode: boolean = false;
  constructor() {}

  checkDarkMode(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDark.matches){
      document.body.classList.toggle('dark');
    }
  }

  cambio(){
    this.darkMode = !this.darkMode;
   document.body.classList.toggle('dark');
   
  }
}
