import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fontSize: string;
  color: string;
  style: {
    'background-color': string;
    'border-radius': string;
    border?: string;
    width?: string;
    height?: string;
  };

  constructor() {
    this.fontSize = '16';
    this.color = 'blue';
    this.style = {
      'background-color': '#ccc',
      'border-radius': '50px',
      height: '30px',
      width: '30px',
    };
  }

  apply(color: string, fontSize: string) {
    this.color = color;
    this.fontSize = fontSize;
  }
}
