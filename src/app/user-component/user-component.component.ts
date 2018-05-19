import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  userName = '';

  userAdded = false;

  constructor() { }

  ngOnInit() {
  }
  
  isUserNameAvailable()
  {
    return this.userName.length > 0;
  }

  addUserName()
  {
    if(this.userName.length>0)
    {
      this.userAdded = true
    }
  }

  isUserAdded()
  {
    return this.userAdded
  }
}
