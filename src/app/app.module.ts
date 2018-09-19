import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterbyComponent } from './registerby/registerby.component';
import { HomeComponent } from './home/home.component';
import { VerifikasiSmsComponent } from './verifikasi-sms/verifikasi-sms.component';
import { PelengkapanDataPendanaComponent } from './pelengkapan-data-pendana/pelengkapan-data-pendana.component';
import { TestHeaderComponent } from './test-header/test-header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterbyComponent,
    HomeComponent,
    VerifikasiSmsComponent,
    PelengkapanDataPendanaComponent,
    TestHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
      path:'',
      component:HomeComponent
    },
    {
      path:'registerby',
      component: RegisterbyComponent
    },
    {
      path:'data-pendana',
      component: PelengkapanDataPendanaComponent
    },
    {
      path:'test-header',
      component: TestHeaderComponent
    },
    {
      path:'verifikasiSms',
      component: VerifikasiSmsComponent
    }
  ])],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
