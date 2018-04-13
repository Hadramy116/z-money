import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {WelcomePage} from '../pages/welcome/welcome';
import {AboutPage} from '../pages/about/about';

import {TransfertService} from "../providers/transfert-service-mock";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TransfertListPage } from '../pages/transfert-list/transfert-list';
import { TransfertDetailPage } from '../pages/transfert-detail/transfert-detail';
import { ValidationListPage } from '../pages/validation-list/validation-list';
import { SendMoneyPage } from '../pages/send-money/send-money';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    AboutPage,
    TransfertListPage,
    TransfertDetailPage,
    SendMoneyPage,
    ValidationListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    AboutPage,
    TransfertListPage,
    TransfertDetailPage,
    SendMoneyPage,
    ValidationListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TransfertService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
