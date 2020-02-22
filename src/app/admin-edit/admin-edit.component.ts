import { CarryService } from './../carry.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  constructor(private http:HttpClient ,private Router:Router,private carry:CarryService) { }
  
    user: any ;
    postbody: any;

  ngOnInit() {
    this.user = this.carry.data
    console.log(this.user)
  }

  editdone(){
    this.postbody = {
      "UserID" : this.carry.data._id,
      "username" : this.carry.data.username,
      "Firstname" : this.carry.data.Firstname,
      "Lastname" : this.carry.data.Lastname,
      "level"  : this.carry.data.level
    }
    this.http.put('http://localhost:3000/admin/user/',this.postbody).subscribe(result => {
      console.log(result)
  
      this.Router.navigateByUrl("/admin")

    })
  }

}
