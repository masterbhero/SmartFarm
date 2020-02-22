import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.css']
})
export class BackupComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function() {
      setTimeout(function () {
       $(function () {
         $('#example').DataTable();
       }); 
      }, 100);  
  });
  }

}
