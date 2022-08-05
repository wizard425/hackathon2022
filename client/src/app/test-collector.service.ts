import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from './test';

@Injectable({
  providedIn: 'root',
})
export class TestCollectorService {
  constructor(private http: HttpClient) {}

  getAllTests(): Observable<Test[]> {
    return this.http.get<Test[]>('http://10.10.207.85:8080/api/tests');
  }

  // TODO: SORT
  getTestByName(name: String) {}

  getTestByDate(date: Date) {}

  getTestByHost(host: String) {}
}
