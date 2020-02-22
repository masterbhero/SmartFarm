import { MatDialog } from '@angular/material/dialog';
import { ManagedevicePopupComponent } from './../managedevice-popup/managedevice-popup.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-managedevice',
  templateUrl: './managedevice.component.html',
  styleUrls: ['./managedevice.component.css']
})
export class ManagedeviceComponent implements OnInit {

  managedevice: any;
  constructor(public dialog: MatDialog) { 
    this.managedevice = {
      name:[
        'แปลงที่ 1 ',
        'แปลงที่ 2 ',
        'แปลงที่ 3 ',
        'แปลงที่ 4 ',
        
      ]
    }
  }

  openDialog() {
    this.dialog.open(ManagedevicePopupComponent);
}

  ngOnInit() {
  }

}
