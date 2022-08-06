import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestDetailComponent } from './test-detail/test-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hackathon2022';

  constructor(private dialog: MatDialog) {}

  addTest() {
    const diaRef = this.dialog.open(TestDetailComponent);
  }
}
