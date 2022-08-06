import { Component, OnInit } from '@angular/core';
import { TestCollectorService } from '../test-collector.service';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.scss'],
})
export class TestDetailComponent implements OnInit {
  constructor(private serv: TestCollectorService) {}

  status: boolean = false;

  ngOnInit(): void {
    this.serv.getStatus().subscribe((res) => {
      this.status = res.status;
    });
  }

  setRecording(statuss: boolean) {
    if (statuss)
      this.serv.startRecording().subscribe((res) => {
        this.status = true;
      });
    else
      this.serv.stopRecording().subscribe((res) => {
        this.status = false;
      });
  }
}
