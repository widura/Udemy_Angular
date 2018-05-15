import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverName = "";

  serverStatusInfo = "Server is not running";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;

    }, 2000)
  }

  onCreateServer() {
    this.serverStatusInfo = "Server is up and running";
  }
 
  onUpdateServerName(event : Event)
  {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
