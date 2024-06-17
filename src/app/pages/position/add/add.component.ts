import { Component,OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { PositionService} from "../../../@core/services/apis/position.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NbToastrService} from "@nebular/theme";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{
  addForm!: FormGroup;
  constructor(
    private positionService: PositionService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: NbToastrService) {
  }
  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl('',Validators.required),
    });
  }
  create() {
    if (this.addForm.valid) {
      this.positionService.addPosition(this.addForm.value).pipe().subscribe({
        next: this.handleLoginSuccess.bind(this),
        error: this.handleError.bind(this),
      });
    }
  }
  protected handleLoginSuccess(res: any) {
    this.toastrService.show(
      'Thêm chức vụ thành công!',
      'Thành công',
      { status: 'success' }
    );
    this.router.navigate(['/pages/Position/list']).then();
    console.log(res);
  }

  protected handleError(error: any) {
    this.toastrService.show(
      'Thêm chúc vụ thất bại. Vui lòng thử lại sau.',
      'Lỗi',
      { status: 'danger' }
    );
    console.error('Error adding positon:', error);
  }
}
