import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService} from './auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// tslint:disable-next-line: import-spacing
import { HttpClientModule, HTTP_INTERCEPTORS  }  from '@angular/common/http';
import { TransactionService} from './transaction/transaction.service';
import { InterceptorService } from './interceptor.service';
import { ListPageModule } from '../app/list/list.module';

import { from } from 'rxjs';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ListPageModule,
    HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    TransactionService, {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true},

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
