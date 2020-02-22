

import { PlantDataPopupComponent } from './../plant-data-popup/plant-data-popup.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlotPopupComponent } from './../plot-popup/plot-popup.component';
import { PlantDataDeleteComponent } from './../plant-data-delete/plant-data-delete.component';


@Component({
  selector: 'app-plant-data',
  templateUrl: './plant-data.component.html',
  styleUrls: ['./plant-data.component.css']
})
export class PlantDataComponent implements OnInit {


  constructor(public dialog: MatDialog) { }
  
  openDialogdelete() {
    this.dialog.open(PlantDataDeleteComponent);
}

  openDialogadmin() {
    this.dialog.open(PlotPopupComponent);
}
  openDialog() {
    this.dialog.open(PlantDataPopupComponent);
}

ngOnInit() {

  $(document).ready(function() {
    setTimeout(function () {
     $(function () {
       $('#example').DataTable();
     }); 
    }, 100);  
});
}



}
