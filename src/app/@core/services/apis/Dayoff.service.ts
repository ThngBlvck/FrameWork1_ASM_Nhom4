import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DayoffInfoModel {
  id: number,
  name: string,
  reason: string,
  dayoff: string
}
@Injectable({
  providedIn: 'root'
})
export class DayoffService {
  API_URL = 'http://127.0.0.1:5000/api/dayoff';
  [x: string]: any;
  constructor(private http: HttpClient) {}

  getAllDayoffs(): Observable<any> {
    return this.http.get(`${this.API_URL}`);
  }
  // getUnit():Observable<any>{
  //   return this.http.get('http://127.0.0.1:3000/api/position',{
  //     headers: new HttpHeaders().set('x-access-token', this.authService.getToken())
  //   })
  // }
  addDayoff(add: DayoffInfoModel): Observable<any> {
    return this.http.post(`${this.API_URL}`, add);
  }

  deleteDayoff(id: DayoffInfoModel): Observable<any> {
    return this.http.delete(`${this.API_URL}/` + id);
  }

  getDayoffByid(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/` + id);
  }

  updateDayoff(id: number, dayoff: DayoffInfoModel): Observable<any> {
    return this.http.put(`${this.API_URL}/` + id, {
      name: dayoff.name,
      reason: dayoff.reason,
      date: dayoff.dayoff
    });
  }
}
