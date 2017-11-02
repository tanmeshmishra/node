import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {ExitService} from '../exit.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any[]=[];
  total=0;

  constructor(private service: AuthenticationService, private exitService: ExitService) { }

  ngOnInit() {
    this.getCartData();
  }
  getCartData(){

   var email=this.exitService.email;
    this.service.onRetrieveFromcart(email).subscribe(response =>{ var data=response.json();this.products=data;
      this.calculateTotal();
    console.log(this.products);
    });
  }
calculateTotal(){
  
  for(var i=0;i<this.products.length;i++)
  {
    this.total+=this.products[i].price;
  }
  console.log(this.total);
  return this.total;
}
}
