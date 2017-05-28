import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import * as firebase from 'firebase';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  pet: string = "puppies";
  isAndroid: boolean = false;

  constructor
  (
    platform: Platform,
    private camera: Camera
  ) 
  {
    this.isAndroid = platform.is('android');
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyC1l1rcYBMb7QYgg05lvPNnsrn_dSy8MPg",
      authDomain: "little-one-admin.firebaseapp.com",
      databaseURL: "https://little-one-admin.firebaseio.com",
      projectId: "little-one-admin",
      storageBucket: "little-one-admin.appspot.com",
      messagingSenderId: "478814953367"
    };
    firebase.initializeApp(config);
  }

  takePicture(){
    const camOpts: CameraOptions = {
      quality:100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(camOpts).then((imagePath) => {
      console.log(imagePath);
      this.uploadToFirebase(imagePath);
    }, (err) => {
      console.log("Camera error: "+err);
    });
  }

  uploadToFirebase(imagePath){
    var storageRef = firebase.storage().ref();

    var camPicRef = storageRef.child("Camera_upload.jpg");
    var file = imagePath;
    camPicRef.put(file,{contentType:'image/jpg'}).then(success=>{
      console.log("Image uploaded successfully");
    });
  }
}