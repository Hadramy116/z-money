import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  lang:any;
  title:any;
  langage:any;
  op1: any;
  op2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.lang = 'fr';

        this.title = "Parameter";
        this.langage = "Langage";
        this.op1 = "Francais";
        this.op2 = "arabe";
  }

  switchLanguage() {
  //  this.translate.use(this.lang);
  this.title ="اعدادت ";
  this.langage = "اللغة";
  this.op1 = "الفرنسية";
  this.op2 = "العربية";
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

}
