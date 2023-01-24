import { CustomerComponent } from './layouts/customer/customer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainWindowComponent } from './components/main-window/main-window.component';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { LoginComponent } from './layouts/login/login.component';
import { HttpClientModule } from '@angular/common/http';

import { StatRepairComponent } from './components/stat-repair/stat-repair.component';
import { ListRepairComponent } from './components/list-repair/list-repair.component';
import { SignupComponent } from './layouts/signup/signup.component';
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
@NgModule({
  declarations: [
    AppComponent,
    MainWindowComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
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
