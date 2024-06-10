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
  [x: string]: any;
  constructor(private http: HttpClient) {}

  getAllPositon(): Observable<any> {
    return this.http.get('http://127.0.0.1:5000/api/position');
  }
  // getUnit():Observable<any>{
  //   return this.http.get('http://127.0.0.1:3000/api/position',{
  //     headers: new HttpHeaders().set('x-access-token', this.authService.getToken())
  //   })
  // }
  addPosition(add: PositionInfoModel): Observable<any> {
    return this.http.post('http://127.0.0.1:5000/api/position', add);
  }

  // postPosition(position: PositionInfoModel): Observable<any> {
  //   return this.http.post('http://127.0.0.1:5000/api/position', {
  //     name: position.name,
  //   });
  // }

  deletePositions(id: PositionInfoModel): Observable<any> {
    return this.http.delete('http://127.0.0.1:5000/api/position/' + id);
  }

  getPositionByid(id: number): Observable<any> {
    return this.http.get('http://127.0.0.1:5000/api/position/' + id);
  }

  updatePosition(id: number, position: PositionInfoModel): Observable<any> {
    return this.http.put('http://127.0.0.1:5000/api/position/' + id, {
      name: position.name
    });
  }
}
