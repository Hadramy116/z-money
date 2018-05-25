import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ValidationPage } from './validation';

@NgModule({
  declarations: [
    ValidationPage,
  ],
  imports: [
    //IonicModule.forChild(ValidationPage),
  ],
  exports: [
    ValidationPage
  ]
})
export class ValidationPageModule {}
