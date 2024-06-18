import { Component, OnInit } from '@angular/core';
import { Salary } from 'app/@core/interfaces/salary';
import { SalaryService } from 'app/@core/services/apis/salary.service';
import { Iemployee } from 'app/@core/interfaces/employee';
import { Router } from "@angular/router";
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listEmployees: Iemployee[] = [];
  listSalary: Salary[] = [];
  combineData: any[];

  constructor(
    private salaryService: SalaryService,
    private router: Router,
    private toastrService: NbToastrService // Inject NbToastrService
  ) { }

  ngOnInit(): void {
    this.getSalary();
    this.getEmployee();
  }

  getSalary(): void {
    this.salaryService.getAllSalary().subscribe(res => {
      console.log(res.data);
      this.listSalary = res.data;
      this.combineDatas();
    });
  }

  getEmployee(): void {
    this.salaryService.getAllEmployee().subscribe(res => {
      console.log(res.data);
      this.listEmployees = res.data;
      this.combineDatas();
    });
  }

  combineDatas(): void {
    if (this.listSalary.length > 0 && this.listEmployees.length > 0) {
      this.combineData = this.listSalary.map(salary => {
        return {
          ...salary,
          employeeName: this.listEmployees.find(cat => cat.id === salary.employee_id)?.name,
          employeeId: this.listEmployees.find(cat => cat.id === salary.employee_id)?.id
        };
      });
    }
  }

  deleteSalary(id: number): void {
    this.salaryService.deleteSalary(id).subscribe(
      res => {
        console.log('Deleted successfully');
        // Hiển thị thông báo thành công
        this.toastrService.success('Xóa thành công!', 'Thông báo');
        this.combineData = this.combineData.filter(salary => salary.id !== id);
      },
      err => {
        console.error('Error deleting salary:', err);
        this.toastrService.danger('Có lỗi xảy ra khi xóa!', 'Thông báo');
      }
    );
  }

  editSalary(salaryId: number): void {
    this.router.navigate(['pages/Salary/edit', salaryId]);
  }

  confirmDelete(id: number): void {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xoá?');
    if (confirmDelete) {
      // Gọi hàm xử lý xoá
      this.deleteSalary(id);
    }
  }
}
