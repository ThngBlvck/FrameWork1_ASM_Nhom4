import {Component, OnInit} from '@angular/core';
import {DayoffInfoModel} from "../dayoff.component";
import {DayoffService} from "../../../@core/services/apis/Dayoff.service";
import { Router} from "@angular/router";
import {PositionInfoModel} from "../../position/position.component";
import {DeleteComponent} from "../../position/delete/delete.component";
import {NbDialogService, NbToastrService} from "@nebular/theme";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  dataD: DayoffInfoModel;

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
    })
  }
  deleteDayoff(id: DayoffInfoModel) {
    this.dialogService.open(DeleteComponent)
      .onClose.subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.dayoff.deleteDayoff(id).subscribe({
          next: res => {
            this.toastrService.show('Xóa chức vụ thành công!', 'Thành công', { status: 'success' });
            this.getAll();
          },
          error: err => {
            this.toastrService.show('Xóa chức vụ thất bại. Vui lòng thử lại.', 'Lỗi', { status: 'danger' });
          }
        });
      }
    });
  }
}
