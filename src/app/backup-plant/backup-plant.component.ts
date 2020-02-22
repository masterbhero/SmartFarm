import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backup-plant',
  templateUrl: './backup-plant.component.html',
  styleUrls: ['./backup-plant.component.css']
})
export class BackupPlantComponent implements OnInit {

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
