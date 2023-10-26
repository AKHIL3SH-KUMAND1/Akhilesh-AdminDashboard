import { Component } from '@angular/core';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  card1 = {
    Sales:"Sales",
    icon:"truck",
    price:"2.382",
    text:"text-danger",
    percentage:"-3.65"
  }
  card2 = {
    Sales:"Earnings",
    icon:"dollar-sign",
    price:"$21.300",
    text:"text-success",
    percentage:"6.65"
  }
  card3 = {
    Sales:"Visitors",
    icon:"users",
    price:"14.212",
    text:"text-success",
    percentage:"5.25"
  }
  card4 = {
    Sales:"Orders",
    icon:"shopping-cart",
    price:"64",
    text:"text-danger",
    percentage:"-2.25"
  }
}
