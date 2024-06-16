import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PositionService} from "../../../@core/services/apis/position.service";
import {PositionInfoModel} from "../position.component";
import { ActivatedRoute, Router } from '@angular/router';
import {NbDialogService, NbToastrService} from "@nebular/theme";
import {DeleteComponent} from "../delete/delete.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  dataP!: PositionInfoModel;

  constructor(
    private http: HttpClient,
    private position: PositionService,
    private route: ActivatedRoute,
    private router: Router,
  private dialogService: NbDialogService,
  private toastrService: NbToastrService,
  ) {
  }
  ngOnInit(): void {
    this.getAllPosition();
  }
  listPosition: PositionInfoModel[] = [];
  getAllPosition(){
    this.position.getAllPositon().subscribe(res =>{
      this.dataP = res.data;
      console.log(this.dataP);
    })
  }
  deletePosition(id: PositionInfoModel) {
    this.dialogService.open(DeleteComponent)
      .onClose.subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.position.deletePositions(id).subscribe({
          next: res => {
            this.toastrService.show('Xóa chức vụ thành công!', 'Thành công', { status: 'success' });
            this.getAllPosition();
          },
          error: err => {
            this.toastrService.show('Xóa chức vụ thất bại. Vui lòng thử lại.', 'Lỗi', { status: 'danger' });
          }
        });
      }
    });
  }
}
