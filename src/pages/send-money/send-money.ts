import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { TransfertService } from '../../providers/transfert-service-mock';


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

  item: any;
  private num_client:string;
  private num_receiver:string;
  private montant:string;
  private description:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private service: TransfertService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendMoneyPage');
   
  }

  addToListTransfer(){
    
    this.item = {
      id: this.service.getTaille() +1 ,
      address: "l'adresse du client",
      city: "NKTT",
      state: "MA",
      zip: "01742",
      price: this.montant,
      title: this.num_client+" vers "+this.num_receiver,
      picture: "./assets/img/i-money.jpg",
      thumbnail:  "./assets/img/i-money.jpg",
      tags: "colonial",
      description: "Lorem ipsum dolor sit amet",
     
    }
    console.log(this.item);
    this.service.addIhem(this.item);
    this.presentAlert();
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