import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { BlankComponent } from './blank/blank.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ProdcutsComponent } from './prodcuts/prodcuts.component';
import { ProdcutCreateComponent } from './prodcut-create/prodcut-create.component';
import { ProductComponent } from './product/product.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CartComponent } from './cart/cart.component';
import { MarketComponent } from './market/market.component';

const routes: Routes = [
  {
    path:"",
    component:MainComponent
  },
  {
    path:"Profile",
    component:ProfileComponent
  },
  {
    path:"Signin",
    component:SigninComponent
  },
  {
    path:"Signup",
    component:SignupComponent
  },
  {
    path:"Users",
    component:BlankComponent,
    children : [
      {
        path:"user/:id",
        component:UserComponent
      },
      {
        path:"user/edit/:id",
        component:EditUserComponent
      }
    ]
  },
  {
    path:"Products",
    component:ProdcutsComponent,
    children:[
      {
        path:"Create",
        component:ProdcutCreateComponent
      },
      {
        path:"product/:id",
        component:ProductComponent
      },
      {
        path:"product/edit/:id",
        component:ProductEditComponent
      }
    ]
  },
  {
    path:"cart",
    component:CartComponent
  },
  {
    path:"market",
    component:MarketComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
