import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Salary} from '../../interfaces/salary';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Iemployee} from '../../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {
  map(arg0: (salary: any) => any): () => void {
    throw new Error('Method not implemented.');
  }
    listEmployee: Iemployee[] = [];
    listSalary: Salary[] = [];
  private apiUrl = 'http://127.0.0.1:5000/api/salary'
  constructor(
    private http: HttpClient
  ) { }

  getAllSalary(): Observable<any> {
    return this.http.get('http://127.0.0.1:5000/api/salary');
  }
  getSalaryById(id: number): Observable<Salary> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Salary>(url);
  }
  getAllEmployee(): Observable<any> {
    return this.http.get('http://127.0.0.1:5000/api/employee');
  }
  addSalaryIdx(add: Salary): Observable<any> {
    return this.http.post('http://127.0.0.1:5000/api/salary', add);
  }
  deleteSalary(id: number): Observable<any> {
    return this.http.delete(`http://127.0.0.1:5000/api/salary/${id}`);
  }

  updateSalary(id: number, salary: Salary): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, salary);
  }

}
