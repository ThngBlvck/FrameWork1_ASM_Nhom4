import { Component } from '@angular/core';

export interface DayoffInfoModel {
  id: number,
  name: string,
  reason: string,
  dayoff: string
}
@Component({
  selector: 'app-dayoff',
  template: `<router-outlet></router-outlet>`,
})
export class DayoffComponent {

}
