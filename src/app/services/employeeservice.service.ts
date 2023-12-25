import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';
import { employeeModel } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http:HttpClient) {

  }

  employeeregister(addemp:employeeModel,
    ):Observable<employeeModel>{
    // console.log("I am Employee Register");    
    return this.http.post<employeeModel>(`${environment.addemp}`,addemp);

}


}
