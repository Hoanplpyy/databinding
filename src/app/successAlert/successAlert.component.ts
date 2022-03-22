import { Component, OnInit } from "@angular/core";



@Component({
  selector: 'app-successalert',
  templateUrl: './successalert.component.html',
  styleUrls: ['./successalert.component.css']
})

export class SuccessAlertComponent implements OnInit {

  serverName: string;
  serverCreated: boolean = false;
  serverCreateStatus = "Server is not created"
  allowNewServer = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)

  }

  onCreateServer() {
    this.serverCreateStatus = "Server is created";
    this.serverCreated = true;
  }

}
