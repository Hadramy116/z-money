import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {WelcomePage} from '../pages/welcome/welcome';
import {AboutPage} from '../pages/about/about';

import {TransfertService} from "../providers/transfert-service-mock";
import { LoginPage} from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TransfertListPage } from '../pages/transfert-list/transfert-list';
import { TransfertDetailPage } from '../pages/transfert-detail/transfert-detail';
import { ValidationListPage } from '../pages/validation-list/validation-list';
import { SendMoneyPage } from '../pages/send-money/send-money';
import {MapPage} from '../pages/map/map';
import {ValidationPage} from '../pages/validation/validation';
import {NotificationPage} from '../pages/notification/notification';
import {MessagePage} from '../pages/message/message';
import {ProfilePage} from '../pages/profile/profile';


@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    AboutPage,
    TransfertListPage,
    TransfertDetailPage,
    SendMoneyPage,
    LoginPage,
    MapPage,
    ValidationPage,
    NotificationPage,
    ProfilePage,
    MessagePage,
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
    LoginPage,
    MapPage,
    ValidationPage,   
    NotificationPage,
    MessagePage,
    ProfilePage,
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
