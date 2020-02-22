import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mc-data-delete',
  templateUrl: './mc-data-delete.component.html',
  styleUrls: ['./mc-data-delete.component.css']
})
export class McDataDeleteComponent implements OnInit {

  
  constructor(public dialog: MatDialog) { }
  

  closeDialog(){
    this.dialog.closeAll();
  }

  ngOnInit() {
  }

}
