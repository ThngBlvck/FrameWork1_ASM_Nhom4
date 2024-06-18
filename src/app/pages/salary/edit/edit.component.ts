import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalaryService } from '../../../@core/services/apis/salary.service';
import { Iemployee } from '../../../@core/interfaces/employee';
import { Salary } from '../../../@core/interfaces/salary';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  employees: Iemployee[] = [];
  salaryId: number;
  loading = false;
  salary: Salary;

  constructor(
    private fb: FormBuilder,
    private salaryService: SalaryService,
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: NbToastrService // inject NbToastrService
  ) {
    this.editForm = this.fb.group({
      employee_id: ['', Validators.required],
      salarycong: ['', Validators.required],
      salarytru: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.salaryService.getAllSalary().subscribe(
      res => {
        this.salary = res.data.find(salarry => salarry.id === id);
      }
    );
  }

  updateSalary(): void {
    this.salaryService.updateSalary(this.salary.id, this.salary).subscribe(
      res => {
        console.log('Updated successfully');
        // Hiển thị thông báo thành công
        this.toastrService.success('Cập nhật thành công!', 'Thông báo');
        // Chuyển hướng sau khi cập nhật thành công
        this.router.navigate(['/pages/Salary/list']);
      },
      err => {
        // Hiển thị thông báo lỗi nếu có
        this.toastrService.danger('Có lỗi xảy ra!', 'Thông báo');
      }
    );
  }
}
