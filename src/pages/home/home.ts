import { Component } from '@angular/core';

import { Platform, NavParams, ModalController,ViewController  } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Contacts } from '../contacts/contacts';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  cons=['<i>Contact list empty<i>']
  constructor
  (
    platform: Platform,
    private camera: Camera,
    private navParam: NavParams,
    private modal: ModalController,
    private viewCtrl: ViewController
  ) 
  {
    this.navParam.get("contacts")
    // this.cons = this.viewCtrl.getContent()
  }

  openSelectContactModal(){
    let sc = this.modal.create(Contacts);
    sc.present();
  }

}