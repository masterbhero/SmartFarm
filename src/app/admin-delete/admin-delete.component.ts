import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.css']
})
export class AdminDeleteComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
    
  closeDialog(){
    this.dialog.closeAll();
  }

  ngOnInit() {
  }

}
