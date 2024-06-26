import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommunicationsService } from 'app/@core/services/apis/communications.service';
import { Iemployee } from 'app/@core/interfaces/employee';
import { Router } from "@angular/router";
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  employees: Iemployee[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private communicationsService: CommunicationsService,
    private router: Router,
    private toastrService: NbToastrService
  ) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      employee_id: ['', Validators.required]
    });

    this.loadEmployees();
  }

  loadEmployees(): void {
    this.communicationsService.getAllEmployee().subscribe(res => {
      if (Array.isArray(res.data)) {
        this.employees = res.data;
      } else {
        console.error('Expected an array of employees, but got:', res.data);
      }
    });
  }

  create(): void {
    if (this.addForm.valid) {
      const formData = this.addForm.value;
      console.log(formData);

      this.communicationsService.addCommunicationsIdx(formData).subscribe(
        (res) => {
          console.log('Thêm thành công:', res);
          this.toastrService.success('Thêm nhân viên thành công', 'Success');
          // Chuyển hướng sau khi thêm thành công
          this.router.navigate(['pages/Communications/list']); // Thay thế '/your-success-route' bằng đường dẫn bạn muốn chuyển đến
        },
        (error) => {
          console.error('Lỗi khi thêm:', error);
        }
      );
    } else {
      console.log('Form không hợp lệ. Vui lòng kiểm tra lại.');
    }
  }
}
