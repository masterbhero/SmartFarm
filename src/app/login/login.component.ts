import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  postbody: any;
  obj: object;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  postUser(username: HTMLInputElement, password: HTMLInputElement) {
    this.postbody = {
      "email": username.value,
      "password": password.value
    }
    this.http.post('http://localhost:3000/user/login', this.postbody).subscribe(result => {
      const str = JSON.stringify(result);
      this.obj = JSON.parse(str);

      console.log(this.obj['status']);
      if (this.obj['status'] == "success") {
        this.router.navigate(['/plot'])
      }


    });


  }

}
