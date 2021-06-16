import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { JobsPage } from '../pages/jobs/jobs';
import { SparkyPage } from '../pages/sparky/sparky';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


@NgModule({
  declarations: [
    MyApp,
    JobsPage,
    SparkyPage,
    DashboardPage,
    ContactPage,
    HomePage,
    TabsPage
    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    JobsPage,
    SparkyPage,
    DashboardPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
