import { Component } from '@angular/core';
import { NavController, ModalController, NavParams,ViewController } from 'ionic-angular';

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class Contacts {
  params: Object
  selectedContacts = []
  contactList = [
    "Prem",
    "Chand",
    "Sugriva",
    "Prasad",
    "Hari narayan",
    "Katwaru",
    "Prem",
    "Chand",
    "Sugriva",
    "Prasad",
    "Hari narayan",
    "Katwaru",
    "Mallah"
  ]
  constructor(
    public modalCtrl: ModalController, 
    public navParams: NavParams,
    public nav: NavController,
    private viewCtrl: ViewController
    ) 
  {
  }

  selectContact(contact){
    var index = this.selectedContacts.indexOf(contact,0)
    if(index > -1){
      this.selectedContacts.splice(index,1);
      console.log("remove")
    }
    else{
      this.selectedContacts.push(contact)
      console.log("add")
    }
    this.navParams.data = this.selectedContacts
    console.log("B4:"+this.selectedContacts.length);
  }

  dismissModal()
  { 
    this.viewCtrl.dismiss();
  }
  dismissWithData()
  {
    let data = {'selectedContacts':this.selectedContacts}
    this.viewCtrl.dismiss(data);
  }
}
