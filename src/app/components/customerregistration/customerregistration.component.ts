import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CustomerModel } from 'src/app/model/customer.model';
import { CustomerserviceService } from 'src/app/services/customerservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-customerregistration',
  templateUrl: './customerregistration.component.html',
  styleUrls: ['./customerregistration.component.scss']
})
export class CustomerregistrationComponent implements OnInit {
  
  isText: boolean = false;
  customerForm!:FormGroup;
  addcustomer=new CustomerModel();

  eyeIcon: string = 'fa-eye-slash';


  constructor(private fb:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private customerService:CustomerserviceService
    
    ){}


  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name:['',Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      phoneno: ['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      email: ['', Validators.required],
    
    });    
  }


  customerProcess(){
    const newcustomer=new CustomerModel();
    const formdata=this.customerForm.value
    newcustomer.name=formdata.name;
    newcustomer.address1=formdata.address1;
    newcustomer.address2=formdata.address2;
    newcustomer.phoneno=formdata.phoneno;
    newcustomer.email=formdata.email


    if(this.customerForm.valid){
      console.log(this.addcustomer);
  

      this.customerService.customerregister(newcustomer).
      subscribe( result=>{
     
        console.log(result);
        //  alert("sucessful"); 
         this.customerForm.reset();
         Swal.fire(" Registered Successfully");      
          this.router.navigate(["login"])
                  })
}
  }

  
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    // this.isText ? (this.type = 'text') : (this.type = 'password');
  }


}