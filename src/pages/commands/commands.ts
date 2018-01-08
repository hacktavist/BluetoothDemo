import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';


/**
 * Generated class for the CommandsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-commands',
  templateUrl: 'commands.html',
})
export class CommandsPage {
  dataParameters: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private bluetoothSerial: BluetoothSerial) {
    bluetoothSerial.enable();
  }

  btCommand(x){
    this.bluetoothSerial.clear();
    this.bluetoothSerial.write(x.toString());
  }

  disconnect(){
    this.bluetoothSerial.disconnect();
    this.navCtrl.pop();
  }

}
