import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
// import {PositionService} from "../../../@core/services/apis/position.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DayoffService} from "../../../@core/services/apis/Dayoff.service";
import {NbToastrService} from "@nebular/theme";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent  implements OnInit{
  addForm: FormGroup;
  constructor(
    private dayoffService: DayoffService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: NbToastrService) {
  }
  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl('',Validators.required),
      reason: new FormControl('',Validators.required),
      dayoff: new FormControl('',Validators.required)

    });
  }
  create() {
    if (this.addForm.valid) {
      this.dayoffService.addDayoff(this.addForm.value).pipe().subscribe({
        next: this.handleLoginSuccess.bind(this),
        error: this.handleError.bind(this),
      });
    }
  }
  protected handleLoginSuccess(res: any) {
    this.toastrService.show(
      'Thêm ngày nghĩ thành công!',
      'Thành công',
      { status: 'success' }
    );
    this.router.navigate(['/pages/Dayoff/list']).then();
    console.log(res);
  }

  protected handleError(error: any) {
    this.toastrService.show(
      'Thêm ngày nghĩ thất bại. Vui lòng thử lại sau.',
      'Lỗi',
      { status: 'danger' }
    );
    console.error('Error adding positon:', error);
  }
}

