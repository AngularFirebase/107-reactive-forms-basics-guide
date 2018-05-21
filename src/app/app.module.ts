import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FirebaseOptionsToken, FirebaseAppNameToken, FirebaseAppConfigToken } from 'angularfire2';


// Add your project credentials
// Then use it in the imports section below
const yourFirebaseConfig = {
  apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  databaseURL: '<your-database-URL>',
  projectId: '<your-project-id>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-messaging-sender-id>'
};

// Delete Me!
import { firebase } from '../env';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule,
    FontAwesomeModule 
  ],
  providers: [
    { provide: FirebaseOptionsToken, useValue: firebase },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
