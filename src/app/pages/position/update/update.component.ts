import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PositionInfoModel} from "../position.component";
import { ActivatedRoute, Router } from '@angular/router';
import {PositionService} from "../../../@core/services/apis/position.service";
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
    private router: Router ) {

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
    this.positionService.updatePosition(this.id, this.updatePosition.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/pages/Position/list']);
    });
  }
}
