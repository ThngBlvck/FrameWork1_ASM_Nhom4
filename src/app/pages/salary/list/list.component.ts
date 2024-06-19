import { Component, OnInit } from '@angular/core';
import { Salary } from 'app/@core/interfaces/salary';
import { SalaryService } from 'app/@core/services/apis/salary.service';
import { Iemployee } from 'app/@core/interfaces/employee';
import { Router } from "@angular/router";
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { DeleteComponent } from "../../salary/delete/delete.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listEmployees: Iemployee[] = [];
  listSalary: Salary[] = [];
  combineDataa: any[] = [];
  paginatedData: any[] = [];
  currentPage: number = 1;
  pageSize: number = 5;

  constructor(
    private salaryService: SalaryService,
    private router: Router,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit(): void {
    this.getSalary();
    this.getEmployee();
  }

  getSalary(): void {
    this.salaryService.getAllSalary().subscribe(res => {
      console.log('Salaries:', res.data);
      this.listSalary = res.data;
      this.combineDatas();
    });
  }

  getEmployee(): void {
    this.salaryService.getAllEmployee().subscribe(res => {
      console.log('Employees:', res.data);
      this.listEmployees = res.data;
      this.combineDatas();
    });
  }

  combineDatas(): void {
    if (this.listSalary.length > 0 && this.listEmployees.length > 0) {
      this.combineDataa = this.listSalary.map(salary => {
        const employee = this.listEmployees.find(emp => emp.id === salary.employee_id);
        return {
          ...salary,
          employeeName: employee ? employee.name : 'Unknown',
          employeeId: employee ? employee.id : null,
        };
      });
      this.setPaginatedData();
    }
  }

  editSalary(salaryId: number): void {
    this.router.navigate(['pages/Salary/edit', salaryId]);
  }

  delete(id: number): void {
    this.dialogService.open(DeleteComponent)
      .onClose.subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.salaryService.deleteSalary(id).subscribe({
          next: res => {
            this.toastrService.show('Xóa lương thành công!', 'Thành công', { status: 'success' });
            // Refresh data after deletion
            this.getSalary();
          },
          error: err => {
            this.toastrService.show('Xóa lương thất bại. Vui lòng thử lại.', 'Lỗi', { status: 'danger' });
          }
        });
      }
    });
  }

  setPaginatedData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.combineDataa.slice(startIndex, endIndex);
    console.log('Paginated Data:', this.paginatedData);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.setPaginatedData();
  }
}
