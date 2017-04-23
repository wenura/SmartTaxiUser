import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { createempPage } from '../createemp/createemp';
@Component({
  selector: 'userlogin',
  templateUrl: 'userlogin.html'
})
export class userloginPage {

  constructor(public navCtrl: NavController) {

  }
login(){
    this.navCtrl.push(TabsPage,{

    });
}
createemployee(){
    this.navCtrl.push(createempPage,{});
}
}
