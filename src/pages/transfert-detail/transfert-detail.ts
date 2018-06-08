import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import { TransfertService } from '../../providers/transfert-service-mock';
import { ValidationListPage } from '../validation-list/validation-list';

@Component({
    selector: 'page-transfert-detail',
    templateUrl: 'transfert-detail.html'
})
export class TransfertDetailPage {

    property: any;

    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public propertyService: TransfertService, public toastCtrl: ToastController) {
        this.property = this.navParams.data;
        propertyService.findById(this.property.id).then(
            property => this.property = property
        );
    }

   
    favorite(property) {
        this.propertyService.favorite(property)
            .then(property => {
                let toast = this.toastCtrl.create({
                    message: 'Ajouter a la list des transcaction valide',
                    cssClass: 'mytoast',
                    duration: 3000
                });
                toast.present(toast);
            });
        this.navCtrl.push(ValidationListPage)
    }

    share(property) {
        let actionSheet: ActionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: () => console.log('share via twitter')
                },
                {
                    text: 'Facebook',
                    handler: () => console.log('share via facebook')
                },
                {
                    text: 'Email',
                    handler: () => console.log('share via email')
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => console.log('cancel share')
                }
            ]
        });

        actionSheet.present();
    }

}
