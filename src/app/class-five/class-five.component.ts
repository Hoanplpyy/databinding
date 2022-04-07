import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-class-five',
  templateUrl: './class-five.component.html',
  styleUrls: ['./class-five.component.css'],
  // encapsulation:ViewEncapsulation.ShadowDom
})
export class ClassFiveComponent implements OnInit {

  serverElements = [{ type: 'server', name: 'testServer', content: 'just test' }]

  constructor() { }

  ngOnInit(): void {
  }


  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

}
