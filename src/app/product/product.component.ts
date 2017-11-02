import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {ExitService} from '../exit.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productInfo: any = [];
  selectedItems: any = [];
  total = 0;
  constructor(private service: AuthenticationService, private exitService: ExitService) {
    this.productInfo = [{
      p_img: 'http://www.minibazar.in/wp-content/uploads/12189088_1934382646786087_41173252050686048_n.jpg',
      productId: 1.0,
      productName: 'Armani Watch',
      price: 14990 ,
      description: 'Stainless steel case, rose/golden ,Stainless steel bracelet comb.,50 Metres water-resistant'
    }
      ,
    {
      p_img: 'https://ae01.alicdn.com/kf/HTB1ZIqVLpXXXXadXVXXq6xXFXXX4/Size-6-5-11-Mens-Dress-Shoes-Fashion-Oxford-Shoes-For-Men-Black-Brown-PU-Leather.jpg_640x640.jpg',
      productId: 2.0,
      productName: 'Ruosh Brown Formal Shoe',
      price: 14449,
      description: '  Mens Crocodile Print Patent Leather Derby Shoes, Lining-Leather'
    }
      ,
    {
      p_img: 'http://www.allhandbagfashion.com/wp-content/uploads/2010/04/2010-Louis-Vuitton-Monogram-Vernis-Top-Handles-2.jpg',
      productId: 3.0,
      productName: 'Louis Vuitton Alma Bag',
      price: 24990,
      description: 'Double zip for secure closing, Textile lining'
    },
    {
      p_img: 'https://i.pinimg.com/736x/3a/8a/f9/3a8af9ff6695cc5fa8a32dd29cb0a944--dance-outfits-for-teens-cute-black-dresses-for-teens.jpg',
      productId: 4.0,
      productName: 'Black GUCCI Lace Dress',
      price: 29990,
      description: '  Isabel Marant black lase dress,  Striped silk and linen-blend'
    }
    ];
   }

  ngOnInit() {
  }
  addToCart(name: String, price: Number, img: String, description: String) {
    
    this.service.onAddToCart( this.exitService.email,name, price, img, description).subscribe(res=>{alert("Added successfully")});

   
  }


  


}
