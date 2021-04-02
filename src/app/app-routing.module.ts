import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: 'employees', component: EmployeesComponent },
  {path: 'homepage', component: HomepageComponent },
  {path: '', redirectTo: '/homepage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
