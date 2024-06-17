import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PositionInfoModel} from "../position.component";
import { ActivatedRoute, Router } from '@angular/router';
import {PositionService} from "../../../@core/services/apis/position.service";
import {NbToastrService} from "@nebular/theme";
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit{
  updatePosition: FormGroup;
  ListById: PositionInfoModel;
  id = this.route.snapshot.params['id'];

  constructor(
    private positionService: PositionService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: NbToastrService) {

  }
  ngOnInit(){
    this.updatePosition = new FormGroup({
      name: new FormControl('',Validators.required)
    });
    this.editPosition(this.id);
  }

  editPosition(id: number) {
    this.positionService.getPositionByid(id).subscribe(res => {
      this.ListById = res.position;
      console.log(res.position)
      this.updatePosition.patchValue(this.ListById);
    });
  }

  saveEditPosition() {
    if (this.updatePosition.valid) {
      this.positionService.updatePosition(this.id, this.updatePosition.value).subscribe((res) => {
          this.handleSaveSuccess(res);
        },
      );
    }
  }
  handleSaveSuccess(res: any) {
    this.toastrService.success('Cập nhật chức vụ thành công!', 'Thành công');
    this.router.navigate(['/pages/Position/list']).then();
    console.log(res);
  }
}
