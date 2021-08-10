import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AngularFireModule } from 'angularfire2';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareInfoService } from './common/providers/share-info.service';
import { ShareModule } from './common/share.module';
// import { AngularFireDatabaseModule } from 'angularfire2/database'



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
  ],
  providers: [ShareInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
