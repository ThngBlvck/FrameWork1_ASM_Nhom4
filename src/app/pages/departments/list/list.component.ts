import { Component, OnInit } from '@angular/core';
import {EmployeeModel} from "../../../@core/interfaces/employee.interface";
import {DepartmentModel} from "../../../@core/interfaces/department.interface";
import {DepartmentService} from "../../../@core/services/apis/department.service";
import { DeleteComponent } from '../delete/delete.component';
import { NbDialogService, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  departments: DepartmentModel[] = [];
  paginatedData: any[] = [];
  currentPage: number = 1;
  pageSize: number = 5;
  constructor(
    private DepartmentService: DepartmentService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,) {

  }
  ngOnInit(): void {
    this.getAllDepartment();
  }

  getAllDepartment(){
    this.DepartmentService.getAllDepartment().subscribe(res =>{
      this.departments = res.data;
      console.log(this.departments);
    })
  }

  setPaginatedData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.departments.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.setPaginatedData();
  }

  delete(id: DepartmentModel) {
    this.dialogService.open(DeleteComponent)
      .onClose.subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.DepartmentService.deleteDepartment(id).subscribe({
          next: res => {
            this.toastrService.show('Xóa phòng ban thành công!', 'Thành công', { status: 'success' });
            this.getAllDepartment();
          },
          error: err => {
            this.toastrService.show('Xóa phòng ban thất bại. Vui lòng thử lại.', 'Lỗi', { status: 'danger' });
          }
        });
      }
    });
  }
}
