import { Component } from '@angular/core';

import { Platform, NavParams, ModalController,ViewController  } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Contacts } from '../contacts/contacts';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  private cons

  constructor
  (
    platform: Platform,
    private camera: Camera,
    private navParam: NavParams,
    private modal: ModalController,
    private viewCtrl: ViewController
  ) 
  {
    if(this.viewCtrl.getNavParams().get('selectedContacts') !== null){
      this.cons = this.navParam.get('selectedContacts')
    }
    else{
      this.cons=[]
    }
    console.log("arr:"+this.cons);
  }

  openSelectContactModal(){
    let sc = this.modal.create(Contacts);
    sc.present()
    sc.onDidDismiss(data=>{
      this.cons = data.selectedContacts
      console.log(this.cons)
    })
  }
}