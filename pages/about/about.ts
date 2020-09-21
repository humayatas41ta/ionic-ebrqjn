import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['calculator.css'],
})
export class AboutPage {
 mLValue: number;
 cost1Value: number;
 cost2Value: number;
 saveValue: number;
 lValue: number;
 unitA: number;
 unitB: number;

  constructor(public navCtrl: NavController) {

  }

compute() {
  (this.unitA= (this.cost1Value/this.mLValue)*1000);
  (this.unitB= (this.cost2Value/this.lValue));
  (this.saveValue= (this.unitA - this.unitB));
}


}
