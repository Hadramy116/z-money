import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


/**
 * Generated class for the SendMoneyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-send-money',
  templateUrl: 'send-money.html',
})
export class SendMoneyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendMoneyPage');
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Envoi',
      subTitle: 'done',
      buttons: ['ok']
    });
    alert.present();
  }
  
}