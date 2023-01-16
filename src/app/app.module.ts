import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainWindowComponent } from './components/main-window/main-window.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';

import { StatRepairComponent } from './components/stat-repair/stat-repair.component';
import { ListRepairComponent } from './components/list-repair/list-repair.component';
@NgModule({
  declarations: [
    AppComponent,
    MainWindowComponent,
    HomepageComponent,
    LoginComponent,
    StatRepairComponent,
    ListRepairComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
