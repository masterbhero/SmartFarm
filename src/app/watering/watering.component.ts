import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-watering',
  templateUrl: './watering.component.html',
  styleUrls: ['./watering.component.css']
})
export class WateringComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

 
  closeDialog(){
    this.dialog.closeAll();
  }

 ngOnInit() {
  }

}
