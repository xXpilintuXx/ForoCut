import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { generate } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  url = 'http://localhost:3000/login'
  user = {
    username: 'example',
    email: 'example',
    password: 'example'
  };

  callServer(){
    const headers = new HttpHeaders()
      .set('Content-type', 'application/json');
      this.http.post(this.url, JSON.stringify(this.user), {
        headers: headers
      })
      .subscribe( this.upUser );
  }  
  generarUsuario(nombre_, email_, password_){
        this.user.username = nombre_;
        this.user.email = email_;
        this.user.password = password_;
  }
  
  upUser(data){
    
  }
  constructor(private http: HttpClient) {
    }

  ngOnInit() {
  }

}
