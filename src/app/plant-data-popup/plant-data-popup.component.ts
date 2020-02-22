import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-plant-data-popup',
  templateUrl: './plant-data-popup.component.html',
  styleUrls: ['./plant-data-popup.component.css']
})
export class PlantDataPopupComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  

closeDialog(){
  this.dialog.closeAll();
}
  
  ngOnInit() {
  }
}
