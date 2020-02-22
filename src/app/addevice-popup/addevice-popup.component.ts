import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addevice-popup',
  templateUrl: './addevice-popup.component.html',
  styleUrls: ['./addevice-popup.component.css']
})
export class AddevicePopupComponent implements OnInit {

  
  constructor(public dialog: MatDialog) { }


  closeDialog(){
    this.dialog.closeAll();
  }

  ngOnInit() {
  }

}
