import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NotificationPage } from './notification';

@NgModule({
  declarations: [
    NotificationPage,
  ],
  imports: [
    //IonicModule.forChild(NotificationPage),
  ],
  exports: [
    NotificationPage
  ]
})
export class NotificationPageModule {}
