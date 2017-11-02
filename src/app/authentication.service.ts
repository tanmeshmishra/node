import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) {
  }
  email = '';
  onSignup( name: string,email: string, password: string) {
   return  this.http.post('http://localhost:8888/api/t3/createUser',
    ({ email : email , name: name, password: password}));
  }

  onLogin(email: string) {
    return this.http.get('http://localhost:8888/api/t3/getUser/' + email);
  }

  addPrice(price: number) {
    return this.http.put('http://localhost:8888/api/t3/updateTotalCost/' + this.email, {price: price});
  }

  isLoggedIn() {
    return this.email === '' ? false : true ;
  }

  onAddToCart(user: String,name: String, price: Number, p_img: String, description: String) {
    return  this.http.post('http://localhost:8888/api/t3/cartPost',
     ({email: user,name: name , price:price, p_img: p_img,description: description}));
   }

   onRetrieveFromcart(email){
    return this.http.get('http://localhost:8888/api/t3/cartGet/'+email);
   

   }
 

}
