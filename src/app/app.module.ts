import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeatherIconTestComponent } from './feather-icon-test/feather-icon-test.component';
import { ChartComponent } from './chart/chart.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { BlankComponent } from './blank/blank.component';
import { MainComponent } from './main/main.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ProdcutsComponent } from './prodcuts/prodcuts.component';
import { ProdcutCreateComponent } from './prodcut-create/prodcut-create.component';
import { ProductComponent } from './product/product.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CartComponent } from './cart/cart.component';
import { MarketComponent } from './market/market.component'
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    CardComponent,
    DashboardComponent,
    FeatherIconTestComponent,
    ChartComponent,
    ProfileComponent,
    SigninComponent,
    SignupComponent,
    BlankComponent,
    MainComponent,
    UserComponent,
    EditUserComponent,
    ProdcutsComponent,
    ProdcutCreateComponent,
    ProductComponent,
    ProductEditComponent,
    CartComponent,
    MarketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
