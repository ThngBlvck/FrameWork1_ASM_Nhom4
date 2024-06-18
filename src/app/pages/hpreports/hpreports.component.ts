import { Component, OnInit } from '@angular/core';
import { EfficiencyService } from '../../@core/services/apis/efficiency.service';

@Component({
  selector: 'app-hpreports',
  templateUrl: './list.component.html',
})
export class HPreportsComponent implements OnInit {
  totalEmployees: number = 0;
  employeesAchieved: number = 0;
  employeesNotAchieved: number = 0;
  chartData: any[] = [];
  colorScheme = {
    domain: ['#65a454', '#A10A28']
  };

  constructor(private efficiencyService: EfficiencyService) {}

  ngOnInit(): void {
    this.efficiencyService.getAllData().subscribe(data => {
      this.totalEmployees = data.getEmployees.data.length;
      this.employeesAchieved = data.getEfficiencies.data.filter(eff => eff.progress === 2).length;
      this.employeesNotAchieved = data.getEfficiencies.data.filter(eff => eff.progress === 1).length;
      this.updateChartData();
    });
  }

  updateChartData(): void {
    this.chartData = [
      { name: 'Đạt', value: this.employeesAchieved },
      { name: 'Chưa Đạt', value: this.employeesNotAchieved }
    ];
  }
}
