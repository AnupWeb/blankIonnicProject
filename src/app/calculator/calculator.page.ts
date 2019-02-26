import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  constructor(public navctrl: NavController) { }

  ngOnInit() {
  }
  closeCal(){
    this.navctrl.navigateForward('/home');
  }

}
