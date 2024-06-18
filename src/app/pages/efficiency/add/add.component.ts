import { Component, OnInit } from '@angular/core';
import { Iefficiency } from "../../../@core/interfaces/efficiency.interface";
import { Iemployee } from "../efficiency.component";
import { EfficiencyService } from "../../../@core/services/apis/efficiency.service";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  newEfficiency: Iefficiency = {
    id: null,
    employee_id: null,
    job: null,
    progress: 1,
    createdAt: '',
    updatedAt: ''
  };
  newEmployees: Iemployee[];

  constructor(
    private efficiencyService: EfficiencyService,
    private router: Router,
    private fb: FormBuilder,
    private toastrService: NbToastrService, // Inject NbToastrService
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.efficiencyService.getAllEmployee().subscribe(
      res => {
        this.newEmployees = res.data;
      },
      error => {
        this.toastrService.danger('Lỗi khi tải danh sách nhân viên', 'Error');
      }
    );
  }

  addEfficiency(): void {
    this.efficiencyService.postEfficiency(this.newEfficiency).subscribe(
      res => {
        console.log('Thêm hiệu suất thành công');
        this.toastrService.success('Thêm hiệu suất thành công', 'Success');
        this.router.navigate(['/pages/Efficiency'], { state: { showAddSuccess: true } });
      },
      error => {
        console.error('Lỗi khi thêm hiệu suất:', error);
        this.toastrService.danger('Lỗi khi thêm hiệu suất', 'Error');
      }
    );
  }
}
