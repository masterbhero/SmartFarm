

import { MatDialog } from '@angular/material/dialog';
import { UserPopupComponent } from './../user-popup/user-popup.component';
import { Component, OnInit } from '@angular/core';

const data = {
  chart: {
    caption: "Car Engine Temperature",
    subcaption: "(Per Quarter minute)",
    lowerlimit: "120",
    upperlimit: "200",
    numbersuffix: "°F",
    thmfillcolor: "#008ee4",
    showgaugeborder: "1",
    gaugebordercolor: "#008ee4",
    gaugeborderthickness: "2",
    plottooltext: "Temperature: <b>$datavalue</b> ",
    theme: "fusion",
    showvalue: "1"
  },
  value: "140"
};

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  moisture: any;
  airhumidity:any;
  LightIntensity:any;


  constructor() {
   }
   width = 600;
   height = 400;
   type = "thermometer";
   dataFormat = "json";
   dataSource = data;

  ngOnInit() {
    
  }

}
