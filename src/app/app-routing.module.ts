import { ManagerLoginComponent } from './views/login/manager-login/manager-login.component';
import { CustomerSignupComponent } from './views/signup/customer-signup/customer-signup.component';
import { CustomerLoginComponent } from './views/login/customer-login/customer-login.component';
import { CustomerComponent } from './layouts/customer/customer.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatRepairComponent } from './components/stat-repair/stat-repair.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { CarDepotFormComponent } from './components/customer/car-depot-form/car-depot-form.component';
import { TestDragComponent } from './components/test1-drag/test-drag.component';
import { WorkshopManagerComponent } from './layouts/workshop-manager/workshop-manager.component';
import { CarNotConfirmedComponent } from './components/workshop-manager/car-not-confirmed/car-not-confirmed.component';
import { InsertToDoComponent } from './components/workshop-manager/insert-to-do/insert-to-do.component';
import { RepairsUnconfirmedComponent } from './components/workshop-manager/repairs-unconfirmed/repairs-unconfirmed.component';
const routes: Routes = [
  /*
   *Home page
   */
  { path: '', component: HomepageComponent },
  /*
   *customer
   */
  { path: 'customer/login', component: CustomerLoginComponent },
  { path: 'customer/signup', component: CustomerSignupComponent },
  {
    path: 'customer',
    component: CustomerComponent,
    children: [
      { path: 'car-depot-form', component: CarDepotFormComponent },
      // { path: 'drag', component: TestDragComponent },
    ],
  },
  /*
   *Manager
   */
  { path: 'manager/login', component: ManagerLoginComponent },
  {
    path: 'workshop-manager',
    component: WorkshopManagerComponent,
    children: [
      { path: 'car-not-confirmed', component: CarNotConfirmedComponent },
      {
        path: 'insert-to-do/:customerId/:repairId',
        component: InsertToDoComponent,
      },
      { path: 'repairs-unconfirmed', component: RepairsUnconfirmedComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
