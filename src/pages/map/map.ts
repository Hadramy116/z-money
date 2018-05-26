import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import leaflet from 'leaflet';


/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  
  map:any;
  markersGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
   
  }

  showMap() {
    setTimeout(() => {
        this.map = leaflet.map("map").setView([18.0864, -15.9753], 14);
        leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
            attribution: ' &copy; Mima'
        }).addTo(this.map);
        this.showMarkers();
    })
}

showMarkers() {
    if (this.markersGroup) {
        this.map.removeLayer(this.markersGroup);
    }
    this.markersGroup = leaflet.layerGroup([]);
   
    this.map.addLayer(this.markersGroup);
}

 

}
