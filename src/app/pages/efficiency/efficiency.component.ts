import { Component, OnInit } from '@angular/core';
import { Iefficiency } from "../../@core/interfaces/efficiency.interface";
import { EfficiencyService } from "../../@core/services/apis/efficiency.service";
import { NgForOf, NgIf } from "@angular/common";
import { RouterLink, Router } from "@angular/router";
import { NbToastrService } from '@nebular/theme';
import {PaginatorModule} from "../../@theme/components/paginator/paginator.module"; // Import NbToastrService

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
    NgIf,
    PaginatorModule
  ],
  standalone: true
})
export class EfficiencyComponent implements OnInit {
  listEfficiency: Iefficiency[] = [];
  listEmployee: Iemployee[] = [];
  combinedData: any[] = [];
  paginatedData: any[] = [];
  currentPage: number = 1;
  pageSize: number = 5; // Set to 5 for displaying 5 items per page
  deleteId: number | null = null;

  constructor(
    private efficiencyService: EfficiencyService,
    private router: Router,
    private toastrService: NbToastrService
  ) {}

  ngOnInit(): void {
    this.loadAllData();
  }

  loadAllData(): void {
    this.efficiencyService.getAllData().subscribe(
      (res) => {
        this.listEfficiency = res.getEfficiencies.data;
        this.listEmployee = res.getEmployees.data;
        this.combineData();
        this.setPaginatedData();
      },
      (error) => {
        console.error('Lỗi khi lấy dữ liệu:', error);
      }
    );
  }

  combineData(): void {
    this.combinedData = this.listEfficiency.map((efficiency) => {
      const employee = this.listEmployee.find((emp) => emp.id === efficiency.employee_id);
      return {
        ...efficiency,
        employeeName: employee ? employee.name : '',
        employeeId: employee ? employee.id : ''
      };
    });
  }

  setPaginatedData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.combinedData.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.setPaginatedData();
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
    this.deleteId = null;
  }

  confirmDelete(): void {
    if (this.deleteId !== null) {
      this.efficiencyService.deleteEfficiency(this.deleteId).subscribe(
        (res) => {
          this.combinedData = this.combinedData.filter((item) => item.id !== this.deleteId);
          this.setPaginatedData();
          this.toastrService.success('Đã xóa thành công', 'Success');
          $('#deleteModal').modal('hide');
          this.deleteId = null;
        },
        (error) => {
          this.toastrService.danger('Lỗi khi xóa hiệu suất', 'Error');
        }
      );
    }
  }
}
