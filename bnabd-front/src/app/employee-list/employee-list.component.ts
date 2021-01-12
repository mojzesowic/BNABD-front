import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  
  constructor() { }

  ngOnInit(): void {
    this.employees = [{
      "id": 1,
      "firstName": "dd",
      "lastName": "ddee",
      "emailId": "dd@ddee.com"
    },
    {
      "id": 2,
      "firstName": "ff",
      "lastName": "ffee",
      "emailId": "ff@ffee.com"
    }];
  }

}
