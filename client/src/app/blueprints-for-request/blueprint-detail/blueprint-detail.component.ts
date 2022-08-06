import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blueprint-detail',
  templateUrl: './blueprint-detail.component.html',
  styleUrls: ['./blueprint-detail.component.scss']
})
export class BlueprintDetailComponent implements OnInit {

  @Input() blueprint!: any;
  hasError: boolean | undefined = undefined;
  response: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  testTimeout(reqId: string) {
    console.log('test timeout')
    this.http.post<any>('http://10.10.207.85:8080/api/blueprints/timeout/' + reqId + "/run", { payload: {} }).subscribe(res => {
      console.log(res);
      this.hasError = !res.success;
    })
  }

}
