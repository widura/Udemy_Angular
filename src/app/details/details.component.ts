import { Component, OnInit } from '@angular/core';
import { setDefaultService } from 'selenium-webdriver/opera';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  buttonClickHistory = [];

  isDisplayPasswd = false;

  numberofclicks = [];

  currentClickNo = 0;

  constructor() { }

  ngOnInit() {
  }
  
  display()
  {
    this.currentClickNo++;
    if(this.isDisplayPasswd)
    {
      this.isDisplayPasswd = false;
    }
    else
    {
      this.isDisplayPasswd = true;
    }
    this.buttonClickHistory.push(new Date());
    this.numberofclicks.push(this.currentClickNo);
  }
}
