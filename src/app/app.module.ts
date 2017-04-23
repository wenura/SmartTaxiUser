import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { settingsPage } from '../pages/settings/settings';
import { mapdetailsPage } from '../pages/mapdetails/mapdetails';
import { cashdetailsPage } from '../pages/cashdetails/cashdetails';
import { createempPage } from '../pages/createemp/createemp';
import { userloginPage } from '../pages/userlogin/userlogin';
import { userprofilePage } from '../pages/userprofile/userprofile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    settingsPage,
    userprofilePage,
    mapdetailsPage,
    cashdetailsPage,
    createempPage,
    userloginPage,
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
    settingsPage,
    userprofilePage,
    userloginPage,
    mapdetailsPage,
    createempPage,
    cashdetailsPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
