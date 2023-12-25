import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerModel } from '../model/customer.model';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  

  constructor(private http:HttpClient) {

   }

   customerregister(addcustomer:CustomerModel,
    ):Observable<CustomerModel>{
    console.log("I am Customer Register");    
    return this.http.post<CustomerModel>(`${environment.addcustomer}`,addcustomer);

}
}
