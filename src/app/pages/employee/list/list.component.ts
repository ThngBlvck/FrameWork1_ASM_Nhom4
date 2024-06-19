import { PositionInfoModel } from './../../position/position.component';
import { DepartmentService } from 'app/@core/services/apis/department.service';
import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../@core/services/apis/employee.service";
import {EmployeeModel} from "../../../@core/interfaces/employee.interface";
import { DepartmentModel } from 'app/@core/interfaces/department.interface';
import { PositionService } from 'app/@core/services/apis/position.service';
import { DeleteComponent } from '../delete/delete.component';
import { NbDialogService, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  employees: EmployeeModel[];
  departments: DepartmentModel[];
  positions: PositionInfoModel[];
  combinedData: any[] = [];
  paginatedData: any[] = [];
  currentPage: number = 1;
  pageSize: number = 5;
  constructor(
    private EmployeeService: EmployeeService,
    private DepartmentService: DepartmentService,
    private PositionService: PositionService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,) {

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

  setPaginatedData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.combinedData.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.setPaginatedData();
  }

  delete(id: EmployeeModel) {
    this.dialogService.open(DeleteComponent)
      .onClose.subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.EmployeeService.deleteEmployee(id).subscribe({
          next: res => {
            this.toastrService.show('Xóa nhân viên thành công!', 'Thành công', { status: 'success' });
            this.getAllEmployee();
          },
          error: err => {
            this.toastrService.show('Xóa nhân viên thất bại. Vui lòng thử lại.', 'Lỗi', { status: 'danger' });
          }
        });
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


