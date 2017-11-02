import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';
import { ExitService } from './exit.service';
import { HttpModule } from '@angular/http';
import { CartComponent } from './cart/cart.component';
import { FacebookModule } from 'ngx-facebook';


const routes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'Login', component:LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'Signup', component:SignupComponent},
  { path: 'contact', component : ContactComponent},
  { path: 'logout', component: HomeComponent},
  { path: 'product', component : ProductComponent},
  { path: 'details', component : DetailsComponent},
  { path: '', component: HomeComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
  
    LoginComponent,
    SignupComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    DetailsComponent,
    CartComponent,
   
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    FacebookModule.forRoot()
  ],
  providers: [ExitService, AuthenticationService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private service: ExitService){}
  test() {
    this.service.exit = true;
  }
 }
