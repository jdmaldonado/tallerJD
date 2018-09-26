import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { MyApp } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDKe6bCdhunBAFQ-Srpg3sQ-n9kc72qJGk",
  authDomain: "tallerjd-d6193.firebaseapp.com",
  databaseURL: "https://tallerjd-d6193.firebaseio.com",
  projectId: "tallerjd-d6193",
  storageBucket: "tallerjd-d6193.appspot.com",
  messagingSenderId: "631148252580"
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, 'tallerJD'),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
