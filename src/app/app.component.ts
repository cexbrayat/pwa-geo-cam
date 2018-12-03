import { Component } from '@angular/core';

@Component({
  selector: 'ns-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  position: Position;
  error = false;

  constructor() {
    if (navigator.geolocation) {
      this.updatePosition();
    } else {
      this.error = true;
    }
  }

  updatePosition() {
    navigator.geolocation.getCurrentPosition(pos => this.position = pos);
  }
}
