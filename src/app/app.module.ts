import { CustomerComponent } from './layouts/customer/customer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainWindowComponent } from './components/main-window/main-window.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';

import { StatRepairComponent } from './components/stat-repair/stat-repair.component';
import { ListRepairComponent } from './components/list-repair/list-repair.component';
import { CustomerSidebarComponent } from './components/sidebar/customer-sidebar/customer-sidebar.component';
import { AdminNavbarComponent } from './components/navbar/admin-navbar/admin-navbar.component';

import { HeaderStatsComponent } from './components/header/header-stats/header-stats.component';
import { CardStatsComponent } from './components/card/card-stats/card-stats.component';
import { FooterAdminComponent } from './components/footer/footer-admin/footer-admin.component';
import { CarDepotFormComponent } from './components/customer/car-depot-form/car-depot-form.component';
import { TablePendingCarDepotComponent } from './components/table/table-pending-car-depot/table-pending-car-depot.component';
import { TableConfirmedCarDepotComponent } from './components/table/table-confirmed-car-depot/table-confirmed-car-depot.component';
import { TestDragComponent } from './components/test1-drag/test-drag.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CustomerLoginComponent } from './views/login/customer-login/customer-login.component';
import { CustomerSignupComponent } from './views/signup/customer-signup/customer-signup.component';
import { ManagerLoginComponent } from './views/login/manager-login/manager-login.component';
import { WorkshopManagerComponent } from './layouts/workshop-manager/workshop-manager.component';
import { WorkshopManagerSidebarComponent } from './components/sidebar/workshop-manager-sidebar/workshop-manager-sidebar.component';
import { CarNotConfirmedComponent } from './components/workshop-manager/car-not-confirmed/car-not-confirmed.component';
import { InsertToDoComponent } from './components/workshop-manager/insert-to-do/insert-to-do.component';
@NgModule({
  declarations: [
    AppComponent,
    MainWindowComponent,
    HomepageComponent,
    CustomerComponent,
    CustomerSidebarComponent,
    StatRepairComponent,
    ListRepairComponent,
    AdminNavbarComponent,
    HeaderStatsComponent,
    CardStatsComponent,
    FooterAdminComponent,
    CarDepotFormComponent,
    TablePendingCarDepotComponent,
    TableConfirmedCarDepotComponent,
    TestDragComponent,
    CustomerLoginComponent,
    CustomerSignupComponent,
    ManagerLoginComponent,
    WorkshopManagerComponent,
    WorkshopManagerSidebarComponent,
    CarNotConfirmedComponent,
    InsertToDoComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
  ],
})
export class AppModule {}
