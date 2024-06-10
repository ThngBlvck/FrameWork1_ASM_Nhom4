import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentModel } from 'app/@core/interfaces/department.interface';
import {map, Observable} from 'rxjs';
import {EmployeeModel} from "../../interfaces/employee.interface";
// import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  API_URL = 'http://127.0.0.1:5000/api/departments';
  constructor(
    private http: HttpClient,
    // private authService: AuthService
  ) { }


  // getAllDepartment(): Observable<any> {
  //   return this.http.get('', {
  //     headers: new HttpHeaders().set('x-access-token', this.authService.getToken())
  //   });
  // }

  getAllDepartment(): Observable<any> {
    return this.http.get(`${this.API_URL}`);
  }

  postDepartment(department: DepartmentModel): Observable<any> {
    return this.http.post(`${this.API_URL}`, {
      name: department.name
    });
  }

  getDepartmentById(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/` + id);
  }

  updateDepartment(id: number, department: DepartmentModel): Observable<any> {
    return this.http.put(`${this.API_URL}/` + id, {
      name: department.name
    })
  }

  deleteDepartment(id: DepartmentModel): Observable<any> {
    return this.http.delete(`${this.API_URL}/` + id)
  }
}
