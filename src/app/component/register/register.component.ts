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
  generarUsuario(event: any){
        this.user.username = event.target.name.value;
        if( event.target.email.value === event.target.email_.value){
          this.user.email = event.target.email.value;
        }
        if( event.target.pass.value === event.target.pass_.value ){
          this.user.password = event.target.pass.value;
        }
        this.callServer();
  }
  
  upUser(data){
    console.log(data);
  }
  constructor(private http: HttpClient) {
    }

  ngOnInit() {
  }

}
