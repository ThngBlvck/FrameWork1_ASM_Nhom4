import { Component, OnInit } from '@angular/core';
import { CommunicationsService } from 'app/@core/services/apis/communications.service';
import { Iemployee } from 'app/@core/interfaces/employee';
import { Router } from "@angular/router";
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { CTions } from "../../../@core/interfaces/communications";

import { DeleteComponent } from "../../communications/delete/delete.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listCTions: CTions[] = [];
  listEmployees: Iemployee[] = [];
  combineData: any[] = [];

  constructor(
    private communicationsService: CommunicationsService,
    private router: Router,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit(): void {
    this.getCTions();
    this.getEmployee();
  }

  getCTions(): void {
    this.communicationsService.getAllCommunications().subscribe(res => {
      console.log(res.data);
      this.listCTions = res.data;
      this.combineDatas();
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
    this.dialogService.open(DeleteComponent)
      .onClose.subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.communicationsService.deleteCommunications(id).subscribe({
          next: res => {
            this.toastrService.show('Xóa thông tin nhân viên thành công!', 'Thành công', { status: 'success' });
            this.getCTions();  // Re-fetch the communications data
            this.getEmployee();  // Re-fetch the employee data
          },
          error: err => {
            this.toastrService.show('Xóa thông tin nhân viên thất bại. Vui lòng thử lại.', 'Lỗi', { status: 'danger' });
          }
        });
      }
    });
  }

  editCtion(CtionId: number): void {
    this.router.navigate(['pages/Communications/edit', CtionId]);
  }
}
