import { Component } from '@angular/core';
import { UserService } from '../user.service';
interface User{
  id:number,
  userName:string,
  userEmail:string,
  password:string
}
@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent {
   userList:Array<User>;
  constructor(public userService:UserService){
    this.userList = userService.userList;
  }
}
