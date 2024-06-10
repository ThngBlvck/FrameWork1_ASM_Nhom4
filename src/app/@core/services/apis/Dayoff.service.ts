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
  [x: string]: any;
  constructor(private http: HttpClient) {}

  getAllDayoffs(): Observable<any> {
    return this.http.get('http://127.0.0.1:5000/api/dayoff');
  }
  // getUnit():Observable<any>{
  //   return this.http.get('http://127.0.0.1:3000/api/position',{
  //     headers: new HttpHeaders().set('x-access-token', this.authService.getToken())
  //   })
  // }
  addDayoff(add: DayoffInfoModel): Observable<any> {
    return this.http.post('http://127.0.0.1:5000/api/dayoff', add);
  }

  // postPosition(position: PositionInfoModel): Observable<any> {
  //   return this.http.post('http://127.0.0.1:5000/api/position', {
  //     name: position.name,
  //   });
  // }

  deleteDayoff(id: DayoffInfoModel): Observable<any> {
    return this.http.delete('http://127.0.0.1:5000/api/dayoff/' + id);
  }

  getDayoffByid(id: number): Observable<any> {
    return this.http.get('http://127.0.0.1:5000/api/dayoff/' + id);
  }

  updateDayoff(id: number, dayoff: DayoffInfoModel): Observable<any> {
    return this.http.put('http://127.0.0.1:5000/api/dayoff/' + id, {
      name: dayoff.name,
      reason: dayoff.reason,
      date: dayoff.dayoff
    });
  }
}
