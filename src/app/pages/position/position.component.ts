
import {PositionService} from "../../@core/services/apis/position.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface PositionInfoModel {
  id: number,
  name: string
}
@Component({
  selector: 'app-position',
    template: `<router-outlet></router-outlet>`
    // ./position.component.html
})

export class PositionComponent implements OnInit{
  constructor(
  private position: PositionService
  ) {
  }
  ngOnInit(): void {

  }


}
