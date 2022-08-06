import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { Test } from '../test';
import { TestCollectorService } from '../test-collector.service';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@Component({
  selector: 'app-view-tests',
  templateUrl: './view-tests.component.html',
  styleUrls: ['./view-tests.component.scss'],
})
export class ViewTestsComponent implements OnInit {
  value = '';
  tests: Array<Test> | undefined = undefined;
  constructor(private service: TestCollectorService) {}

  ngOnInit(): void {
    this.service.getAllTests().subscribe((res) => {
      this.tests = res;
      console.log(this.tests);
    });
  }
}
