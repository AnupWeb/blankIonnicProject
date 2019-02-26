import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.page.html',
  styleUrls: ['./stopwatch.page.scss'],
})
export class StopwatchPage implements OnInit {

  constructor(public navctrl: NavController) {
  }

  ngOnInit() {
  }

  closeStopWatch() {
    this.navctrl.navigateForward('/home');
  }
}
