import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feet',
  templateUrl: './feet.component.html',
  styleUrls: ['./feet.component.css']
})

export class FeetComponent implements OnInit {

  constructor() { }
    toValue:any= 1;
    fromValue:any = 12;

    // meter:any= 1;
    // milimeter:any= 1;
    // mile:any= 1;
    // kilometer:any= 1;
    // yard:any= 1;
    // centimeter:any= 1;

    toConvert:any = 'feet';
    fromConvert:any = 'inches';

  ngOnInit(): void {
        
  }

  converter(toUnit:any, fromUnit:any){
    console.log("To Unit = ", toUnit, "From Unit = ", fromUnit);

    if(toUnit == 'feet'){
      if(fromUnit == 'feet'){
        this.fromValue = this.toValue;
      }
      else if(fromUnit == 'inches'){
        this.fromValue = (this.toValue * 12).toFixed(2);
      }

      else if(fromUnit == 'miles'){
        this.fromValue = (this.toValue * 0.000189).toFixed(2);
      }
    }

    else if(toUnit == 'inches'){
      if(fromUnit == 'inches'){
        this.fromValue = this.toValue;
        this.toValue = this.fromValue;
      }
      else if (fromUnit == 'feet') {
        this.toValue = (this.fromValue / 12).toFixed(2);
        this.fromValue = (this.toValue * 12).toFixed(2);
      }
      else if (fromUnit == 'miles') {
        this.toValue = (this.fromValue * 0.000016).toFixed(2);
        // this.fromValue = (this.toValue / 0.000016).toFixed(2);
      }
    }
    else if(toUnit == 'miles'){
      if(fromUnit == 'miles'){
        this.fromValue = this.toValue;
      }
      else if (fromUnit == 'feet') {
        this.toValue = (this.fromValue / 0.000189).toFixed(2);
        this.fromValue = (this.toValue * 0.000189).toFixed(2);
      }
      else if (fromUnit == 'inches') {
        this.toValue = (this.fromValue / 0.000016).toFixed(2);
        // this.fromValue = (this.toValue * 0.000016).toFixed(2);
      }
    }
  }
}