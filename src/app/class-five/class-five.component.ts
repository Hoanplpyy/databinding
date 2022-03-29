import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-five',
  templateUrl: './class-five.component.html',
  styleUrls: ['./class-five.component.css']
})
export class ClassFiveComponent implements OnInit {

  serverElements=[{type:'server',name:'testServer',content:'just test'}]

  constructor() { }

  ngOnInit(): void {
  }

}
