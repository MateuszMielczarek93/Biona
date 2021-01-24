import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Biona';
  
  //global
  goldAmmounBasic = 55500;
  //earth
  earthLevelGoldAdded = 1;
  earthLevel = 1;
  earthUpgradeCost =  50;
  earthUpgradeCostRepair = 4*1.4;
  goldAddEarth = 1;
  //earth idle
 
   //mars
  goldAddMars = 0;
  marsLevelGoldAdded = 1.2;
  marsLevel = 0;
  

  getGold(){
   
    this.goldAmmounBasic = this.goldAmmounBasic + this.goldAddEarth + this.goldAddMars;
    this.goldAmmounBasic = Math.round(this.goldAmmounBasic);
   }

   upgradeEarth(){
if(this.goldAmmounBasic>=this.earthUpgradeCost){
  if(this.earthLevel>=4){
    this.earthLevelGoldAdded = this.earthLevelGoldAdded * this.earthLevel;

    this.goldAmmounBasic = this.goldAmmounBasic - this.earthUpgradeCost;
    this.goldAmmounBasic = Math.round(this.goldAmmounBasic);
  
    this.goldAddEarth = this.earthLevelGoldAdded*0.50;
  
    this.earthLevel = this.earthLevel+1;
    
    this.earthUpgradeCost = this.earthUpgradeCost*this.earthUpgradeCostRepair;
    this.earthUpgradeCost = Math.round(this.earthUpgradeCost);
  }
    else{
      this.earthLevelGoldAdded = this.earthLevelGoldAdded * this.earthLevel;

      this.goldAmmounBasic = this.goldAmmounBasic - this.earthUpgradeCost;
    
      this.goldAddEarth = this.earthLevelGoldAdded*0.50;
    
      this.earthLevel = this.earthLevel+1;
      
      this.earthUpgradeCost = this.earthUpgradeCost*2;

    }
  
}}

upgradeEarthIdle(){




}






}
    

    



