import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GetvaluePage } from '../getvalue/getvalue';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public storage:Storage) {
    storage.ready().then(
      ()=>{
        // ตั้งค่าลง storage
        storage.set("Username", 'Theerajet');
        storage.set("Studentid", '6042040905');

      }

    );
      
  }
  gotoGetvalue(){
    this.navCtrl.push(GetvaluePage);
  }
}
