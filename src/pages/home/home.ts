import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private db: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    this.db.list('users').valueChanges()
      .subscribe((data) => console.log(data));
  }

}
