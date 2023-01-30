import { BillComponent } from './components/customer/bill/bill.component';
import { RepairsOnProcessComponent } from './components/workshop-manager/repairs-on-process/repairs-on-process.component';
import { UnpaidRepairsComponent } from './components/customer/unpaid-repairs/unpaid-repairs.component';
import { UnconfirmedRepairsComponent } from './components/workshop-manager/unconfirmed-repairs/unconfirmed-repairs.component';
import { ManagerLoginComponent } from './views/login/manager-login/manager-login.component';
import { CustomerSignupComponent } from './views/signup/customer-signup/customer-signup.component';
import { CustomerLoginComponent } from './views/login/customer-login/customer-login.component';
import { CustomerComponent } from './layouts/customer/customer.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { CarDepotFormComponent } from './components/customer/car-depot-form/car-depot-form.component';
import { WorkshopManagerComponent } from './layouts/workshop-manager/workshop-manager.component';
import { InsertToDoComponent } from './components/workshop-manager/insert-to-do/insert-to-do.component';
import { FinancialManagerComponent } from './layouts/financial-manager/financial-manager.component';
import { RepairsAdvancementComponent } from './components/customer/repairs-advancement/repairs-advancement.component';
import { InsertPaymentComponent } from './components/financial-manager/insert-payment/insert-payment.component';
import { RepairsUnpaidPaymentComponent } from './components/financial-manager/repairs-unpaid-payment/repairs-unpaid-payment.component';

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
      { path: 'unpaid-repairs', component: UnpaidRepairsComponent },
      { path: 'bills', component: BillComponent },
      { path: 'advancement-repairs', component: RepairsAdvancementComponent },
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
      { path: 'unconfirmed-repairs', component: UnconfirmedRepairsComponent },
      { path: 'repairs-on-process', component: RepairsOnProcessComponent },
      {
        path: 'repair/confirmation-form/:customerId/:repairId',
        component: InsertToDoComponent,
      },
    ],
  },
  {
    path: 'financial-manager',
    component: FinancialManagerComponent,
    children: [
      { path: 'repairs-unpaid', component: RepairsUnpaidPaymentComponent },
      {
        path: 'insert-payment/:customerId/:repairId/:firstName/:lastName/:registration_number',
        component: InsertPaymentComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
