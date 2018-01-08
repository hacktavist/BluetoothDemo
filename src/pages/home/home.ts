import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';
import { CommandsPage } from '../commands/commands';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  skullFound: any;
  commandsPage = CommandsPage;
  skullDevice: any;
  unpairedDevices: any;
  pairedDevices: any;
  gettingDevices: Boolean;
  constructor(public loadCtrl: LoadingController, public navCtrl: NavController, private bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController) {
    bluetoothSerial.enable();
  }



  startScanning() {
    const loading = this.loadCtrl.create({
      content: "Searching for device",
      spinner: "bubbles"
    });
    loading.present().then(() => {
    this.skullFound = null;
    this.pairedDevices = null;
    this.unpairedDevices = null;
    this.gettingDevices = true;
    this.bluetoothSerial.discoverUnpaired().then((success) => {
      this.unpairedDevices = success;
      this.gettingDevices = false;
      success.forEach(element => {
        if( element.name.toString() == " skull"){
          this.skullFound = true;
          this.unpairedDevices.length = 0;
          this.unpairedDevices= ({name:element.name, address:element.address});
          console.log(element.address);
          console.log(this.unpairedDevices.address);
          this.bluetoothSerial.connect(this.unpairedDevices.address).subscribe(data => {
            loading.dismiss().then(() => {
              this.navCtrl.push(this.commandsPage, {deviceInfo:this.unpairedDevices});
            });
          });

        }

      });

      if(this.skullFound == null){
        let alert = this.alertCtrl.create({
          title: "Error",
          message: "Cannot find bluetooth skull, please make sure device is powered on and within range.",
          buttons: ["Ok"]
        });
        alert.present();
        loading.dismiss();
      }

    },
      (err) => {
        console.log(err);
      });

    });


  }

}
