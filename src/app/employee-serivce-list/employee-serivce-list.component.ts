import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-serivce-list',
  templateUrl: './employee-serivce-list.component.html',
  styleUrls: ['./employee-serivce-list.component.css']
})
export class EmployeeSerivceListComponent implements OnInit {

  public employees =[];

  constructor(private _employeeDetails:EmployeeService) { 
    
  }

  ngOnInit() {
    this.employees = this._employeeDetails.getEmployees();
  }

}
