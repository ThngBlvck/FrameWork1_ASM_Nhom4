import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CTions } from '../../interfaces/communications';
import { HttpClient } from '@angular/common/http';
import {Salary} from "../../interfaces/salary";

@Injectable({
  providedIn: 'root'
})


export class CommunicationsService {
  listCT: CTions[] = [];
  private apiUrl = 'http://127.0.0.1:5000/api/communications'
  constructor(private http: HttpClient,) { }
  getAllCommunications(): Observable<any> {
    return this.http.get('http://127.0.0.1:5000/api/communications');
  }
  getAllEmployee(): Observable<any> {
    return this.http.get('http://127.0.0.1:5000/api/employee');
  }

  addCommunicationsIdx(add: CTions): Observable<any> {
    return this.http.post('http://127.0.0.1:5000/api/communications', add);
  }

  deleteCommunications(id: number): Observable<any> {
    return this.http.delete(`http://127.0.0.1:5000/api/communications/${id}`);
  }

  getCommunicationsById(id: number): Observable<Salary> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Salary>(url);
  }

  updateCommunications(id: number, communications: CTions ): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, communications);
  }
}
