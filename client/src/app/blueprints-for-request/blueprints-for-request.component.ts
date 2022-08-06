import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { TestCollectorService } from '../test-collector.service';

@Component({
  selector: 'app-blueprints-for-request',
  templateUrl: './blueprints-for-request.component.html',
  styleUrls: ['./blueprints-for-request.component.scss']
})
export class BlueprintsForRequestComponent implements OnInit, AfterViewInit {
  @Input() requestId: string = "";

  blueprints: Array<any> = [];

  constructor(private serv: TestCollectorService,
    private http: HttpClient) { }
  ngAfterViewInit(): void {

    this.serv.getBlueprint(this.requestId).subscribe(res => {
      console.log(res);
      this.blueprints = res;
    })
  }

  ngOnInit(): void {
    this.serv.getBlueprint(this.requestId).subscribe(res => {
      console.log(res);
      this.blueprints = res;
    })
  }

}
