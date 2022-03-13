import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

 Code: string = '<button id="serverButton" class="btn btn-primary" [disabled]="allowNewServer">Add server</button>';

  constructor() {
  }

  ngOnInit(): void {
  }
}
