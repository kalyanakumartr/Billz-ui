import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EmployeeregistrationComponent } from './components/employeeregistration/employeeregistration.component';
import { CustomerregistrationComponent } from './components/customerregistration/customerregistration.component';

const routes: Routes = [
  {
  path:'login',component:LoginComponent
},
{
  path:'empregister',component:EmployeeregistrationComponent
},

{
  path:'customerregister',component:CustomerregistrationComponent
},

  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
