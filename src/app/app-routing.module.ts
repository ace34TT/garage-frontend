import { CustomerComponent } from './layouts/customer/customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layouts/login/login.component';
import { StatRepairComponent } from './components/stat-repair/stat-repair.component';
import { ListRepairComponent } from './components/list-repair/list-repair.component';
import { SignupComponent } from './layouts/signup/signup.component';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { CarDepotFormComponent } from './components/customer/car-depot-form/car-depot-form.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignupComponent },
  {
    path: 'customer',
    component: CustomerComponent,
    children: [{ path: 'car-depot-form', component: CarDepotFormComponent }],
  },
  { path: 'listRepair', component: ListRepairComponent },
  { path: 'statRepair', component: StatRepairComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
