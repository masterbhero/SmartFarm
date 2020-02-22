import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-register-cancel',
  templateUrl: './register-cancel.component.html',
  styleUrls: ['./register-cancel.component.css']
})
export class RegisterCancelComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  closeDialog(){
    this.dialog.closeAll();
  }
}