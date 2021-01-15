import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Biona';

  goldAmmounBasic = 0;
  goldAddEarth = 1;

  getGold(){
   
    this.goldAmmounBasic = this.goldAmmounBasic + this.goldAddEarth;
      
      


    
    


    }
    

    

  }

