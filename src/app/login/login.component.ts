import { Component, OnInit } from '@angular/core';
import { Router} from'@angular/router';
import { ExitService } from '../exit.service';
import {AuthenticationService} from '../authentication.service';
import { FacebookService, InitParams, LoginResponse, LoginOptions } from 'ngx-facebook';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
   user: any = [];
   app;
   token: any; 
   data;
   userDetails: Object;
   userInfo: boolean = false;

  constructor(private router: Router, private service: ExitService , private fb: FacebookService, private loginService: AuthenticationService ) {
    let initParams: InitParams = {
      appId: '141115879847851', //personal 
      cookie: true,  
      xfbml: true,  
      version: 'v2.8'
   }
   fb.init(initParams);
  }
  FbLogin() {
    console.log('Inside fb login'); // Testing
    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'user_posts,public_profile,user_friends,email,pages_show_list,publish_actions'

    };

    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
        this.data = res.authResponse.userID;
        this.token = res.authResponse.accessToken;
      
      
        // api for getting the specified fields.
        this.fb.api('/me?fields=gender,first_name,last_name,email,picture')
          .then((res: any) => {
            this.userDetails = res;
            console.log(this.userDetails);
            this.userInfo = true;
         
          });
          if (this.userDetails !== null) {
          this.router.navigate(['/product']);
          this.service.exit = false;
          this.service.exit;
  
         
          }
      })
      .catch(this.handleError);
  }

  private handleError(error) {
    console.error('Error processing action', error);
  }
  ngOnInit() {
  }

login(email: string, password: string) {
  this.loginService.onLogin(email)
  .subscribe(res => {
    this.user = JSON.parse(res.text());
    if (this.user == null) {
      console.log('Error occurred');
      alert('Error occurred ');
    } else if (this.user.password === password) {
      this.service.email=this.user.email;
      this.router.navigate(['/product']);
      //this.service.email = this.user.email;
        //return this.service.email;
      this.service.exit = false;
      return this.service.exit;
    } else {
      console.log('Error occurred');
      alert('Error occurred');
    }
});
}
}
