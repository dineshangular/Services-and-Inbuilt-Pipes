import { Injectable } from '@angular/core';
import { checkAndUpdateElementInline } from '../../../node_modules/@angular/core/src/view/element';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(){
    return [
      { name:"Dinesh", age:28, gender:"male", profession:"UI Developer", salary:36000 },
      { name:"Nandhini", age:26, gender:"female", profession:"Oracle Admin", salary:45000 },
      { name:"Mukesh", age:27, gender:"male", profession:"Business", salary:30000 },
      { name:"Karki", age:60, gender:"male", profession:"Business", salary:50000 },
      { name:"Shankar", age:24, gender:"male", profession:"Software Developer", salary:30000 }
    ];
  }
}