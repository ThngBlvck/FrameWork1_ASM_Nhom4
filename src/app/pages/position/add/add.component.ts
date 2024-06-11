import { Component,OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PositionService} from "../../../@core/services/apis/position.service";
import {ActivatedRoute, Router} from "@angular/router";

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
    private router: Router) {
  }
  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl('',Validators.required),
    });
  }
  create() {
    this.positionService.addPosition(this.addForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/pages/Position/list']);
    });
  }
}
