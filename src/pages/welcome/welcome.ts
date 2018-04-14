import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransfertListPage } from '../transfert-list/transfert-list';

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {

    constructor(public navCtrl: NavController) {
    }

    login() {
        this.navCtrl.push(TransfertListPage);
    }

}
