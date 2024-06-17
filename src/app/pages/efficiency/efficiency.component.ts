import { Component, OnInit } from '@angular/core';
import { Iefficiency } from "../../@core/interfaces/efficiency.interface";
import { EfficiencyService } from "../../@core/services/apis/efficiency.service";
import { NgForOf, NgIf } from "@angular/common";
import { RouterLink, Router } from "@angular/router";

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
  showAddSuccess: boolean = false;
  showUpdateSuccess: boolean = false;

  constructor(private efficiencyService: EfficiencyService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.showAddSuccess) {
      this.showAddSuccess = true;
      setTimeout(() => {
        this.showAddSuccess = false;
      }, 3000);
    }
    if (navigation?.extras?.state?.showUpdateSuccess) {
      this.showUpdateSuccess = true;
      setTimeout(() => {
        this.showUpdateSuccess = false;
      }, 3000);
    }
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
        console.error('Error fetching efficiency data:', error);
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
        console.error('Error fetching employee data:', error);
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
    this.deleteId = null; // Reset deleteId when cancelling
  }

  confirmDelete(): void {
    if (this.deleteId !== null) {
      this.efficiencyService.deleteEfficiency(this.deleteId).subscribe(
        (res) => {
          console.log('Đã xóa thành công');
          this.combinedData = this.combinedData.filter((item) => item.id !== this.deleteId);
          this.showSuccess = true; // Thiết lập showSuccess thành true khi xóa thành công
          console.log('showSuccess:', this.showSuccess); // Log trạng thái của showSuccess
          setTimeout(() => {
            this.showSuccess = false; // Ẩn thông báo thành công sau 3 giây
            console.log('showSuccess hidden:', this.showSuccess); // Log khi showSuccess được ẩn
          }, 3000);
          $('#deleteModal').modal('hide'); // Ẩn modal sau khi xóa thành công
          this.deleteId = null; // Đặt lại deleteId
        },
        (error) => {
          console.error('Lỗi khi xóa hiệu suất:', error);
        }
      );
    }
  }

  hideSuccessMessage(): void {
    this.showSuccess = false;
    this.showAddSuccess = false;
    this.showUpdateSuccess = false;
  }
}
