import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  learningTopic = [
    {
      className:'Data binding',
      url:'/server'
    },
    {
      className:'Two-way binding(Input Output)',
      url:'/warningalert'
    },
    {
      className:'Directives',
      url:'/successalert'
    },

  ]

  title = 'first-udemy-app';
}
