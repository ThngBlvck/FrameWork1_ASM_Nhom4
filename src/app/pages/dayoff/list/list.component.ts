import {Component, OnInit} from '@angular/core';
import {DayoffInfoModel} from "../dayoff.component";
import {DayoffService} from "../../../@core/services/apis/Dayoff.service";
import { Router} from "@angular/router";
import {DeleteComponent} from "../../position/delete/delete.component";
import {NbDialogService, NbToastrService} from "@nebular/theme";



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  dataD: DayoffInfoModel[] = [];
  paginatedData: any[] = [];
  currentPage: number = 1;
  pageSize: number = 5;

  constructor(
    private dayoff: DayoffService,
    private router: Router,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,

  ) {
  }
  ngOnInit() {
    this.getAll()
  }
  getAll(){
    this.dayoff.getAllDayoffs().subscribe(res =>{
      this.dataD = res.data;
      console.log(res.data);
      this.setPaginatedData();
    })
  }
  setPaginatedData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.dataD.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.setPaginatedData();
  }
  deleteDayoff(id: DayoffInfoModel) {
    this.dialogService.open(DeleteComponent)
      .onClose.subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.dayoff.deleteDayoff(id).subscribe({
          next: res => {
            this.toastrService.show('Xóa ngày nghĩ thành công!', 'Thành công', { status: 'success' });
            this.getAll();
          },
          error: err => {
            this.toastrService.show('Xóa ngày  thất bại. Vui lòng thử lại.', 'Lỗi', { status: 'danger' });
          }
        });
      }
    });
  }
}
