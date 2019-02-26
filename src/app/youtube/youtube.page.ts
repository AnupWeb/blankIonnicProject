import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.page.html',
  styleUrls: ['./youtube.page.scss'],
})
export class YoutubePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  closeYt(){
    this.navCtrl.navigateBack('/home');
    }
}
