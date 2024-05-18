import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(private router: Router) {}
  editEmployee(employeeId: number) {
    this.router.navigate(['pages/Salary/edit', employeeId]);
  }
  employees: IEmployee[] = [
    {
      employeeId: 1,
      employeeName: 'John Doe',
      employeeCode: 'EMP-001',
      department: 'HR',
      designation: 'Manager',
      salary: 50000,
      imageUrl:
        'https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg',
    },
    {
      employeeId: 2,
      employeeName: 'Jane Smith',
      employeeCode: 'EMP-002',
      department: 'Finance',
      designation: 'Accountant',
      salary: 45000,
      imageUrl:
        'https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_960_720.jpg',
    },
  ];

  selectedEmployee: IEmployee | undefined;

  ngOnInit(): void {
    // Select the first employee when the component initializes
    this.selectEmployee(this.employees[0].employeeId.toString());
  }

  selectEmployee(employeeId: string): void {
    const id = parseInt(employeeId, 10);
    this.selectedEmployee = this.employees.find(
      (employee) => employee.employeeId === id
    );
  }
}
interface IEmployee {
  employeeId: number;
  employeeName: string;
  employeeCode: string;
  department: string;
  designation: string;
  salary: number;
  imageUrl: string;
}
