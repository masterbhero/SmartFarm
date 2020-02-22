import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-managedevice-popup',
  templateUrl: './managedevice-popup.component.html',
  styleUrls: ['./managedevice-popup.component.css']
})
export class ManagedevicePopupComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  closeDialog(){
    this.dialog.closeAll();
  }

  ngOnInit() {
  }

}
