import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backup-mc',
  templateUrl: './backup-mc.component.html',
  styleUrls: ['./backup-mc.component.css']
})
export class BackupMcComponent implements OnInit {

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
