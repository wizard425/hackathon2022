import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hackathon2022';
  enabled = true;

  changeState() {
    this.enabled = !this.enabled;
  }
}
