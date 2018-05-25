import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MessagePage } from './message';

@NgModule({
  declarations: [
    MessagePage,
  ],
  imports: [
   // IonicModule.forChild(MessagePage),
  ],
  exports: [
    MessagePage
  ]
})
export class MessagePageModule {}
