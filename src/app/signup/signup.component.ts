import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {ExitService} from '../exit.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: AuthenticationService,private userService: ExitService) { }

  ngOnInit() {
  }
signup(){
  
  var name=(<HTMLInputElement>document.getElementById("f_name")).value;
  var Lastname=(<HTMLInputElement>document.getElementById("l_name")).value;
  var Email=(<HTMLInputElement>document.getElementById("email")).value;
  var password=(<HTMLInputElement>document.getElementById("pwd")).value;
  var name=name+Lastname;
  
  this.service.onSignup(name,Email,password).subscribe(res=>{console.log(res);
    
  });
  }
}
