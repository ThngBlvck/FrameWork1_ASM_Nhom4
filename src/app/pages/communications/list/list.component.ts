import { Component, OnInit } from '@angular/core';
import { CommunicationsService } from 'app/@core/services/apis/communications.service';
import { Iemployee } from 'app/@core/interfaces/employee';
import { Router } from "@angular/router";
import { NbToastrService } from '@nebular/theme';
import {CTions} from "../../../@core/interfaces/communications";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listCTions: CTions[] = [];
  listEmployees: Iemployee[] = [];
  combineData: any[];

  constructor(
    private communicationsService: CommunicationsService,
    private router: Router,
    private toastrService: NbToastrService // Inject NbToastrService
  ) { }

  ngOnInit(): void {
    this.getCTions();
    this.getEmployee();
  }

  getCTions(): void {
    this.communicationsService.getAllCommunications().subscribe(res => {
      console.log(res.data);
      this.listCTions = res.data;
    });
  }

  getEmployee(): void {
    this.communicationsService.getAllEmployee().subscribe(res => {
      console.log(res.data);
      this.listEmployees = res.data;
      this.combineDatas();
    });
  }

  combineDatas(): void {
    if (this.listCTions.length > 0 && this.listEmployees.length > 0) {
      this.combineData = this.listCTions.map(communication => {
        return {
          ...communication,
          employeeName: this.listEmployees.find(cat => cat.id === communication.employee_id)?.name,
          employeeId: this.listEmployees.find(cat => cat.id === communication.employee_id)?.id
        };
      });
    }
  }

  delete(id: number): void {
    this.communicationsService.deleteCommunications(id).subscribe(
      (res) => {
        console.log('Xóa thành công:', res);
        // Hiển thị thông báo thành công
        this.toastrService.success('Xóa thành công!', 'Thông báo');
        this.combineData = this.combineData.filter(communication => communication.id !== id);
      },
      (error) => {
        console.error('Lỗi khi xóa:', error);
        this.toastrService.danger('Lỗi khi xóa!', 'Thông báo');
      }
    );
  }

  editCtion(CtionId: number): void {
    this.router.navigate(['pages/Communications/edit', CtionId]);
  }

  confirmDelete(id: number): void {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xoá?');
    if (confirmDelete) {
      // Gọi hàm xử lý xoá
      this.delete(id);
    }
  }
}
