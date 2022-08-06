import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestCollectorService } from '../test-collector.service';

@Component({
  selector: 'app-blueprint-create-detail',
  templateUrl: './blueprint-create-detail.component.html',
  styleUrls: ['./blueprint-create-detail.component.scss']
})
export class BlueprintCreateDetailComponent implements OnInit {
  @Output() close: EventEmitter<number> = new EventEmitter<number>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service: TestCollectorService) {
    console.log(data);
  }

  ngOnInit(): void {
  }

  addResponseTime(res: string) {
    const time = parseInt(res);
    console.log(time);
    if (Number.isNaN(time)) return;
    this.service.addTimeoutBlueprint(this.data.reqId, time).subscribe(res => {
      console.log(res);
    })
  }

}
