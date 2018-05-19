import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverName = '';
  serverAdded = false;

  serverStatusInfo = "Server is not running";

  server = ['Server', 'Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;

    }, 2000)
  }

  onCreateServer() {
    if (this.serverName.length > 0) {
      this.serverStatusInfo = "Server is up and running";
      this.server.push(this.serverName)
      this.serverAdded = true;
    }
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
    this.serverAdded = false;
  }

  isServerAdded() {
    return this.serverAdded;
  }

  ngOnInit() {
  }

}
