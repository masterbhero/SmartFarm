import { McDataDeleteComponent } from './../mc-data-delete/mc-data-delete.component';
import { PlotPopupComponent } from './../plot-popup/plot-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mc-data',
  templateUrl: './mc-data.component.html',
  styleUrls: ['./mc-data.component.css']
})
export class McDataComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialogadmin() {
    this.dialog.open(PlotPopupComponent);
}

openDialogmcdata() {
  this.dialog.open(McDataDeleteComponent);
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
