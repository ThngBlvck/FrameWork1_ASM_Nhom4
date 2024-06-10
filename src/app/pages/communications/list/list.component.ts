import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CTions} from "../../../@core/interfaces/communications";
import { CommunicationsService } from 'app/@core/services/apis/communications.service';
import {Iemployee} from "../../../@core/interfaces/employee";
import {Router} from "@angular/router";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  listCTions: CTions[] = [];
  listEmployees: Iemployee[] = [];
  combineData : any[];
  constructor(
    private CommunicationsService: CommunicationsService,
    private router: Router){
  }
  ngOnInit(): void {
    this.getCTions();
    this.getEmployee();
  }


  getCTions(): void {
    this.CommunicationsService.getAllCommunications().subscribe(res => {
      console.log(res.data);
      this.listCTions = res.data;

    });
  }
  getEmployee(): void {
    this.CommunicationsService.getAllEmployee().subscribe(res => {
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
    this.CommunicationsService.deleteCommunications(id).subscribe(
      (res) => {
        console.log('Xóa thành công:', res);
        // Thực hiện các hành động sau khi xóa thành công
      },
      (error) => {
        console.error('Lỗi khi xóa:', error);
        // Xử lý lỗi nếu có
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
    } else {
      // Không làm gì cả
    }
  }
}
