import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MapPage } from './map';

@NgModule({
  declarations: [
    MapPage,
  ],
  imports: [
    //IonicModule.forChild(MapPage),
  ],
  exports: [
    MapPage
  ]
})
export class MapPageModule {}
