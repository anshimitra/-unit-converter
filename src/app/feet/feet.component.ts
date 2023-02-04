import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feet',
  templateUrl: './feet.component.html',
  styleUrls: ['./feet.component.css']
})
export class FeetComponent implements OnInit {

  constructor() { }

    feet:any= 1;
    inch:any = 12;

  ngOnInit(): void {
        
  }

  converter(){
    this.inch = this.feet * 12;
    console.log(this.inch);
  }
}