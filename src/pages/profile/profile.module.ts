import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ProfilePage } from './profile';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    //IonicModule.forChild(ProfilePage),
  ],
  exports: [
    ProfilePage
  ]
})
export class ProfilePageModule {}
