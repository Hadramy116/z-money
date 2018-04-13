import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {WelcomePage} from '../pages/welcome/welcome';
import {AboutPage} from '../pages/about/about';
import { TransfertListPage } from '../pages/transfert-list/transfert-list';
import { ValidationListPage } from '../pages/validation-list/validation-list';
import { SendMoneyPage } from '../pages/send-money/send-money';

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = WelcomePage;

    appMenuItems: Array<MenuItem>;

    accountMenuItems: Array<MenuItem>;

    helpMenuItems: Array<MenuItem>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        this.appMenuItems = [
            {title: 'List de transaction', component: TransfertListPage, icon: 'home'},
            {title: 'Transction valide', component: ValidationListPage, icon: 'star'},
            {title: 'Envoi', component: SendMoneyPage, icon: 'send'},
        ];

        this.accountMenuItems = [
            {title: 'My Account', component: WelcomePage, icon: 'ios-contact'},
            {title: 'Logout', component: WelcomePage, icon: 'log-out'},
        ];

        this.helpMenuItems = [
            {title: 'Welcome', component: WelcomePage, icon: 'bookmark'},
            {title: 'About', component: AboutPage, icon: 'information-circle'},
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
