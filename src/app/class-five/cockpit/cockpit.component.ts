import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  // encapsulation:ViewEncapsulation.ShadowDom
})
export class CockpitComponent implements OnInit {

 @Output() serverCreated =new EventEmitter<{serverName:string,serverContent:string}>();
 @Output() blueprintCreated =new EventEmitter<{serverName:string,serverContent:string}>();

  newServerName = '';
  newServerContent = '';

  @ViewChild('inputServerContent',{static:true}) inputServerInput:ElementRef

  constructor() { }

  ngOnInit(): void {

  }


  onAddServer() {

    this.serverCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    });
  }

  onAddBlueprint() {


    this.blueprintCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    });
  }

}
