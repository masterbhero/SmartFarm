import { WateringComponent } from './../watering/watering.component';
import { FertconfigComponent } from './../fertconfig/fertconfig.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-plotmenu',
  templateUrl: './plotmenu.component.html',
  styleUrls: ['./plotmenu.component.css']
})
export class PlotmenuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(FertconfigComponent);
}
openDialog1() {
  this.dialog.open(WateringComponent);
}
ห


  ngOnInit() {
  }

}