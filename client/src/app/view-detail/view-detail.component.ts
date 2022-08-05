import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import { Test } from '../test';
import { TestCollectorService } from '../test-collector.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss'],
})
export class ViewDetailComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  value = '';
  tests: Array<Test> | undefined = undefined;
  test: Test | undefined = undefined;
  constructor(
    private service: TestCollectorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.service.getAllTests().subscribe((res) => {
        this.tests = res;
        for (let test of this.tests) {
          if (params['id'] == test._id) {
            this.test = test;
          }
        }
        console.log(this.test);
      });
    });
  }

  backClicked() {
    this.router.navigateByUrl('http://localhost:4200/tests');
  }
}
