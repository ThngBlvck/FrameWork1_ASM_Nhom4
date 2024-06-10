import { PositionInfoModel } from './../../position/position.component';
import { DepartmentService } from 'app/@core/services/apis/department.service';
import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../@core/services/apis/employee.service";
import {EmployeeModel} from "../../../@core/interfaces/employee.interface";
import { DepartmentModel } from 'app/@core/interfaces/department.interface';
import { PositionService } from 'app/@core/services/apis/position.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  employees: EmployeeModel[];
  departments: DepartmentModel[];
  positions: PositionInfoModel[];
  combinedData: any[];
  constructor(
    private EmployeeService: EmployeeService,
    private DepartmentService: DepartmentService,
    private PositionService: PositionService) {

  }

  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllDepartment();
    this.getAllPosition();
    this.combineData();
  }

  getAllEmployee(){
    this.EmployeeService.getAllEmployee().subscribe(res =>{
      this.employees = res.data;
      console.log(this.employees);
      this.combineData();
    })
  }

  getAllDepartment(){
    this.DepartmentService.getAllDepartment().subscribe(res =>{
      this.departments = res.data;
      console.log(this.departments);
      this.combineData();
    })
  }

  getAllPosition(){
    this.PositionService.getAllPositon().subscribe(res =>{
      this.positions = res.data;
      console.log(this.positions);
      this.combineData();
    })
  }

  delete(id: EmployeeModel) {
    this.EmployeeService.deleteEmployee(id).subscribe({
      next: () => {
        console.log('xoa thanh cong');
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  combineData(): void {
    if (this.employees.length > 0 && this.departments.length > 0 && this.positions.length > 0) {
      this.combinedData = this.employees.map(employee => {
        return {
          ...employee,
          positionName: this.positions.find(cat => cat.id === employee.position_id)?.name,
          departmentName: this.departments.find(cat => cat.id === employee.department_id)?.name,
        };
      });
    }
  }
}


