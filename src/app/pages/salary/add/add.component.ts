import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SalaryService } from '../../../@core/services/apis/salary.service';
import { Iemployee } from '../../../@core/interfaces/employee';
import {Router} from "@angular/router";
import {NbToastrService} from "@nebular/theme";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  employees: Iemployee[] = [];

  constructor(
    private fb: FormBuilder,
    private salaryService: SalaryService,
  private router: Router,
    private toastrService: NbToastrService
) {
    // Khởi tạo form trong constructor
    this.addForm = this.fb.group({
      salary: [''],
      employee_id: ['']
    });
  }

  ngOnInit(): void {
    // Lấy dữ liệu nhân viên từ service và xử lý trả về
    this.salaryService.getAllEmployee().subscribe(res => {
      if (Array.isArray(res.data)) {
        this.employees = res.data;
      } else {
        console.error('Expected an array of employees, but got:', res.data);
      }
    });
    this.addForm = this.fb.group({

      salary: ['', Validators.required],
      salarycong: ['', Validators.required],
      salarytru: ['', Validators.required],
      employee_id: ['', Validators.required] //// Thêm trường employee_id vào FormGroup
    });
  }

  create() {
    if (this.addForm.valid) {
      this.salaryService.addSalaryIdx(this.addForm.value).pipe().subscribe({
        next: this.handleLoginSuccess.bind(this),
        error: this.handleError.bind(this),
      });
    }
  }
  protected handleError(error: any) {
    this.toastrService.show(
      'Thêm thất bại. Vui lòng thử lại sau.',
      'Lỗi',
      { status: 'danger' }
    );
    console.error('Error adding positon:', error);
  }
  protected handleLoginSuccess(res: any) {
    this.toastrService.show(
      'Thêm thành công!',
      'Thành công',
      { status: 'success' }
    );
    this.router.navigate(['/pages/Salary/list']).then();
    console.log(res);
  }
}
