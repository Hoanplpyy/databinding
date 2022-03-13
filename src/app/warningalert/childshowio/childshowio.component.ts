import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childshowio',
  templateUrl: './childshowio.component.html',
  styleUrls: ['./childshowio.component.css']
})
export class ChildshowioComponent implements OnInit {

  @Input() name: string;

  @Output() nameChange = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onNameChange(){
    this.name='Angular edited in child';

    this.nameChange.emit(this.name)
  }

}
