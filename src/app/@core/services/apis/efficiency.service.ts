import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { forkJoin, Observable } from "rxjs";
import { Iefficiency } from "../../interfaces/efficiency.interface";
import { Iemployee } from "../../../pages/efficiency/efficiency.component";

@Injectable({
  providedIn: 'root'
})
export class EfficiencyService {
  private apiUrEfficiency = "http://localhost:5000/api/efficiency";
  private apiUrlEmployee = "http://localhost:5000/api/employee";

  constructor(private http: HttpClient) {}

  getAllEfficiency(page: number = 1): Observable<any> {
    let params = new HttpParams().set('page', page.toString());
    return this.http.get(this.apiUrEfficiency, { params });
  }

  getAllEmployee(page: number = 1): Observable<any> {
    let params = new HttpParams().set('page', page.toString());
    return this.http.get(this.apiUrlEmployee, { params });
  }

  getAllData(efficiencyPage: number = 1, employeePage: number = 1): Observable<any> {
    return forkJoin({
      getEfficiencies: this.getAllEfficiency(efficiencyPage),
      getEmployees: this.getAllEmployee(employeePage),
    });
  }

  postEfficiency(efficiency: Iefficiency): Observable<any> {
    return this.http.post(this.apiUrEfficiency, efficiency);
  }

  deleteEfficiency(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrEfficiency}/${id}`);
  }

  updateEfficiency(id: number, efficiency: Iefficiency): Observable<any> {
    return this.http.put<any>(`${this.apiUrEfficiency}/${id}`, efficiency);
  }
}
