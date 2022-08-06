import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from './test';

@Injectable({
  providedIn: 'root',
})
export class TestCollectorService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://10.10.207.85:8080/api/';

  getAllTests(): Observable<Test[]> {
    return this.http.get<Test[]>(this.baseUrl + 'tests');
  }

  startRecording() {
    return this.http.post<any>(this.baseUrl + 'status', { status: true });
  }

  stopRecording() {
    return this.http.post<any>(this.baseUrl + 'status', { status: false });
  }

  getStatus() {
    return this.http.get<any>(this.baseUrl + 'status');
  }

  addTimeoutBlueprint(reqId: string, time: number) {
    let body = { request: reqId, timeout: time, payload: {} };
    console.log(body);
    return this.http.post<any>(this.baseUrl + 'blueprints/timeout', body);
  }

  getBlueprint(reqId: string){
    return this.http.get<any>(this.baseUrl + 'blueprints/timeout/' + reqId);
  }
}
