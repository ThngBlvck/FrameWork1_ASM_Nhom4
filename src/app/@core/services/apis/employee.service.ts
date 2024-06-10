import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentModel } from 'app/@core/interfaces/department.interface';
import { EmployeeModel } from 'app/@core/interfaces/employee.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
// import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  API_URL = 'http://127.0.0.1:5000/api/employee';

  constructor(
    private http: HttpClient,
    // private authService: AuthService
  ) { }


  // getAllEmployee(): Observable<any> {
  //   return this.http.get('', {
  //     headers: new HttpHeaders().set('x-access-token', this.authService.getToken())
  //   });
  // }

  getAllEmployee(): Observable<any> {
    return this.http.get(`${this.API_URL}`);
  }

  postEmployee(employee: EmployeeModel): Observable<any> {
    return this.http.post(`${this.API_URL}`, {
      name: employee.name,
      position_id: employee.position_id,
      department_id: employee.department_id
    });
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/` + id);
  }

  updateEmployee(id: number, employee: EmployeeModel): Observable<any> {
    return this.http.put(`${this.API_URL}/` + id, {
      name: employee.name,
      position_id: employee.position_id,
      department_id: employee.department_id
    })
  }

  deleteEmployee(id: EmployeeModel): Observable<any> {
    return this.http.delete(`${this.API_URL}/` + id)
  }
}
