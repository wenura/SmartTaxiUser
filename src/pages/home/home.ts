import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {mapdetailsPage} from '../mapdetails/mapdetails'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
     console.log("hi");
  }
  createbooking(){
    this.navCtrl.push(mapdetailsPage,{
     
  });
   console.log("hi");
  }

}
