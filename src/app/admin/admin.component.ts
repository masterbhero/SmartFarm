

import { CarryService } from './../carry.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AdminPopupComponent } from './../admin-popup/admin-popup.component';
import { PlotPopupComponent } from './../plot-popup/plot-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { AdminDeleteComponent } from './../admin-delete/admin-delete.component';





@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public dialog: MatDialog,public http: HttpClient,public carry: CarryService,public router:Router) {
  }
 displayuser: any; 
 user: any[] ;



      openDialogdelete() {
        this.dialog.open(AdminDeleteComponent);
      }
  
    openDialog() {
      this.dialog.open(PlotPopupComponent);
    }

    openDialogadmin() {
      this.dialog.open(AdminPopupComponent);
    }

    ngOnInit() {
      $(document).ready(function() {
        setTimeout(function () {
         $(function () {
           $('#example').DataTable();
         }); 
        }, 100);  
    });
    this.http.get('http://localhost:3000/admin/user').subscribe(result => {
      this.displayuser = result;
      this.user = this.displayuser;
      console.log(this.user)
      //this.user = str;
    })
      
    }

    edit(data : any){
      this.carry.data = data;
      this.router.navigateByUrl('/AdminEdit');
    }



}

