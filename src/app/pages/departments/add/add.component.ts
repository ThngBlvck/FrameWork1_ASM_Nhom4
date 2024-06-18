import { DepartmentService } from 'app/@core/services/apis/department.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{
  addForm!: FormGroup;
  constructor(
    private DepartmentService: DepartmentService,
    private router: Router,
    private toastrService: NbToastrService,
  ) {

  }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl('',Validators.required),
    });
  }

  create() {
    if (this.addForm.valid) {
      this.DepartmentService.postDepartment(this.addForm.value).pipe().subscribe({
        next: this.handleLoginSuccess.bind(this),
        error: this.handleError.bind(this),
      });
    }
  }
  protected handleLoginSuccess(res: any) {
    this.toastrService.show(
      'Thêm phòng ban thành công!',
      'Thành công',
      { status: 'success' }
    );
    this.router.navigate(['/pages/Departments/list']).then();
    console.log(res);
  }

  protected handleError(error: any) {
    this.toastrService.show(
      'Thêm phòng ban thất bại. Vui lòng thử lại sau.',
      'Lỗi',
      { status: 'danger' }
    );
    console.error('Error adding department:', error);
  }

}
