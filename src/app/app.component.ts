import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Biona';
  

  goldAmmounBasic = 0;
  goldAddEarth = 1.1;
  earthLevel = 1;
  earthLevelGoldAdded = 1.1;
  
  

  getGold(){
   
    this.goldAmmounBasic = this.goldAmmounBasic + this.goldAddEarth;
    this.goldAmmounBasic = Math.round(this.goldAmmounBasic);
   }

   upgradeEarth(){




   }
    

    

  }

