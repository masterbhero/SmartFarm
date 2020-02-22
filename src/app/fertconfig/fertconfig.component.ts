import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-fertconfig',
  templateUrl: './fertconfig.component.html',
  styleUrls: ['./fertconfig.component.css']
})
export class FertconfigComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  closeDialog(){
    this.dialog.closeAll();
  }
}
