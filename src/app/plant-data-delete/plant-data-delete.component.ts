
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-plant-data-delete',
  templateUrl: './plant-data-delete.component.html',
  styleUrls: ['./plant-data-delete.component.css']
})
export class PlantDataDeleteComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  

  closeDialog(){
    this.dialog.closeAll();
  }

  ngOnInit() {
  }

 
}
