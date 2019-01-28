import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home.page';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage  {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  goToHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
