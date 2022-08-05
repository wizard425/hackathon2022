import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-tests',
  templateUrl: './view-tests.component.html',
  styleUrls: ['./view-tests.component.scss'],
})
export class ViewTestsComponent implements OnInit {
  value = 'Clear me';
  constructor() {}

  ngOnInit(): void {}
}
