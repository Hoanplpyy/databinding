import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverID: number = 10;

  serverStatus: string = "offline";

  //

  allowNewServer = false;

  //
  serverCreateStatus = "Server is not created"

  //

  serverTraName: string ="123";

  serverName:string="456";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
    let serverBtn = document.getElementById('serverBtn')
    console.dir(serverBtn)
  }

  getServerStatus() {
    return true;
  }

  onCreateServer() {
    this.serverCreateStatus = "Server is created"
  }

  onUpdateServerName(event: Event) {
    this.serverTraName = (<HTMLInputElement>event.target).value
  }

}
