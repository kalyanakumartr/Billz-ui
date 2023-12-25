import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { employeeModel } from 'src/app/model/employee.model';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-employeeregistration',
  templateUrl: './employeeregistration.component.html',
  styleUrls: ['./employeeregistration.component.scss']
})
export class EmployeeregistrationComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  empForm!:FormGroup;
  addemployee=new employeeModel;

  eyeIcon: string = 'fa-eye-slash';
  constructor(private fb:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private EmployeeService:EmployeeserviceService    
    ){}

  ngOnInit(): void {
    this.empForm = this.fb.group({
      name:['',Validators.required],
      username: ['', Validators.required],
      phoneno:['',Validators.required],
      password: ['', Validators.required],
        });
   
  }
  
  empProcess(){
    const newemp=new employeeModel();
    const formdata=this.empForm.value
    newemp.name=formdata.name;
    newemp.username=formdata.username;
    newemp.password=formdata.password;
    newemp.phoneno=formdata.phoneno;

    
    if(this.empForm.valid){
      // console.log(this.);
  

      this.EmployeeService.employeeregister(newemp).
      subscribe( result=>{
     
        console.log(result);
        //  alert("sucessful"); 
         this.empForm.reset();
         Swal.fire(" Registered Successfully Employee");      
          this.router.navigate(["login"])
                  })
}

}
hideShowPass() {
  this.isText = !this.isText;
  this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
  this.isText ? (this.type = 'text') : (this.type = 'password');
}
}
