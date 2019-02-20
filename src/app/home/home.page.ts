import { Component } from '@angular/core';
import { NavController, MenuController} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(public navCtl: NavController, private menu: MenuController) { }

  openSideMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  closeSideMenu(){
    this.menu.close('first');
  }
}
