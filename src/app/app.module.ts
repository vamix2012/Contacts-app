import { MaterialModule } from './material.module';
import { AuthenticationService } from './authentication/services/authentication.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { SidenavComponent } from './shared/layout/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { ContactState } from './contacts/state/contact.state';
import { NgxsActionsExecutingModule } from '@ngxs-labs/actions-executing';
import { AngularFireModule } from '@angular/fire';
import { OrderModule } from 'ngx-order-pipe';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([ContactState]),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsActionsExecutingModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBsDuVlzXwbDzlMmdmUPYlvM78HVeRMTDI',
      authDomain: 'contacts-app-auth.firebaseapp.com',
      projectId: 'contacts-app-auth',
      storageBucket: 'contacts-app-auth.appspot.com',
      messagingSenderId: '390286762127',
      appId: '1:390286762127:web:c7ff15301fcb38fbebd0fa',
    }),
    MaterialModule,
    OrderModule,
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
