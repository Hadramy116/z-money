import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { TransfertService } from '../../providers/transfert-service-mock';
import { TransfertDetailPage } from '../transfert-detail/transfert-detail';

@Component({
    selector: 'page-validation-list',
    templateUrl: 'validation-list.html'
})
export class ValidationListPage {

    favorites: Array<any>;

    constructor(public navCtrl: NavController, public service: TransfertService) {
        this.getFavorites();
    }

    itemTapped(favorite) {
        this.navCtrl.push(TransfertDetailPage, favorite.property);
    }

    deleteItem(favorite) {
        this.service.unfavorite(favorite)
            .then(() => {
                this.getFavorites();
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    getFavorites() {
        this.service.getFavorites()
            .then(data => this.favorites = data);
    }

}
