import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';



/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
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
