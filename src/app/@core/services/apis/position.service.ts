import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PositionInfoModel {
  id: number,
  name: string
}
@Injectable({
  providedIn: 'root'
})
export class PositionService {
  API_URL = 'http://127.0.0.1:5000/api/position';
  [x: string]: any;
  constructor(private http: HttpClient) {}

  getAllPositon(): Observable<any> {
    return this.http.get(`${this.API_URL}`);
  }
  // getUnit():Observable<any>{
  //   return this.http.get('http://127.0.0.1:3000/api/position',{
  //     headers: new HttpHeaders().set('x-access-token', this.authService.getToken())
  //   })
  // }
  addPosition(add: PositionInfoModel): Observable<any> {
    return this.http.post(`${this.API_URL}`, add);
  }


  deletePositions(id: PositionInfoModel): Observable<any> {
    return this.http.delete(`${this.API_URL}/` + id);
  }

  getPositionByid(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/` + id);
  }

  updatePosition(id: number, position: PositionInfoModel): Observable<any> {
    return this.http.put(`${this.API_URL}/` + id, {
      name: position.name
    });
  }
}
