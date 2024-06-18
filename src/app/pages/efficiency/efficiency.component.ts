import { Component, OnInit } from '@angular/core';
import { Iefficiency } from "../../@core/interfaces/efficiency.interface";
import { EfficiencyService } from "../../@core/services/apis/efficiency.service";
import { NgForOf, NgIf } from "@angular/common";
import { RouterLink, Router } from "@angular/router";
import { NbToastrService } from '@nebular/theme'; // Import NbToastrService

export interface Iemployee {
  id: number;
  name: string;
  address: string;
  position_id: number;
  department_id: number;
  created_at: string;
  updated_at: string;
}
declare var $: any; // Khai báo biến $

@Component({
  selector: 'app-efficiency',
  templateUrl: './list.component.html',
  styleUrls: ['./efficiency.component.scss'],
  imports: [
    NgForOf,
    RouterLink,
    NgIf
  ],
  standalone: true
})
export class EfficiencyComponent implements OnInit {
  listEfficiency: Iefficiency[];
  listEmployee: Iemployee[];
  combinedData: any[];

  deleteId: number | null = null;
  showSuccess: boolean = false;

  constructor(
    private efficiencyService: EfficiencyService,
    private router: Router,
    private toastrService: NbToastrService // Tiêm NbToastrService
  ) {

  }

  ngOnInit(): void {
    this.getEfficiency();
    this.getEmployee();
  }

  getEfficiency(): void {
    this.efficiencyService.getAllEfficiency().subscribe(
      (res) => {
        console.log(res);
        this.listEfficiency = res.data;
        this.combineData();
      },
      (error) => {
        console.error('Lỗi khi lấy dữ liệu hiệu suất:', error);
      }
    );
  }

  getEmployee(): void {
    this.efficiencyService.getAllEmployee().subscribe(
      (res) => {
        console.log(res);
        this.listEmployee = res.data;
        this.combineData();
      },
      (error) => {
        console.error('Lỗi khi lấy dữ liệu nhân viên:', error);
      }
    );
  }

  combineData(): void {
    if (this.listEfficiency && this.listEmployee) {
      this.combinedData = this.listEfficiency.map((efficiency) => {
        return {
          ...efficiency,
          employeeName: this.listEmployee.find((emp) => emp.id === efficiency.employee_id)?.name,
          employeeId: this.listEmployee.find((emp) => emp.id === efficiency.employee_id)?.id,
        };
      });
    }
  }

  getProgressText(progress: number): string {
    return progress === 1 ? 'Chưa đạt' : 'Đạt';
  }

  openDeleteModal(u: any): void {
    this.deleteId = u.id;
    $('#deleteModal').modal('show');
  }

  cancelDelete(): void {
    $('#deleteModal').modal('hide');
    this.deleteId = null; // Đặt lại deleteId khi hủy
  }

  confirmDelete(): void {
    if (this.deleteId !== null) {
      this.efficiencyService.deleteEfficiency(this.deleteId).subscribe(
        (res) => {
          console.log('Đã xóa thành công');
          this.combinedData = this.combinedData.filter((item) => item.id !== this.deleteId);
          this.toastrService.success('Đã xóa thành công', 'Success'); // Hiển thị thông báo thành công
          $('#deleteModal').modal('hide'); // Ẩn modal sau khi xóa thành công
          this.deleteId = null; // Đặt lại deleteId
        },
        (error) => {
          console.error('Lỗi khi xóa hiệu suất:', error);
          this.toastrService.danger('Lỗi khi xóa hiệu suất', 'Error'); // Hiển thị thông báo lỗi
        }
      );
    }
  }

  hideSuccessMessage(): void {
    this.showSuccess = false;
  }
}
