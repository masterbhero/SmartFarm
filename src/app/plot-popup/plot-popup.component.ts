import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-plot-popup',
  templateUrl: './plot-popup.component.html',
  styleUrls: ['./plot-popup.component.css']
})
export class PlotPopupComponent implements OnInit {


    constructor(public dialog: MatDialog) { }
  
    ngOnInit() {
    }


  closeDialog(){
    this.dialog.closeAll();
  }

}
