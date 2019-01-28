import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AbonnementPage } from 'src/pages/abonnement/abonnement.page';
import { AccueilPage } from 'src/pages/accueil/accueil.page';
import { CguPage } from 'src/pages/cgu/cgu.page';
import { ConseilsPage } from 'src/pages/conseils/conseils.page';
import { ContactPage } from 'src/pages/contact/contact.page';
import { FlyerPage } from 'src/pages/flyer/flyer.page';
import { GaleriePage } from 'src/pages/galerie/galerie.page';
import { HomePage } from 'src/pages/home/home.page';
import { IntroPage } from 'src/pages/intro/intro.page';
import { LoginPage } from 'src/pages/login/login.page';
import { NutristatsPage } from 'src/pages/nutristats/nutristats.page';
import { ParametrePage } from 'src/pages/parametre/parametre.page';
import { ProfilPage } from 'src/pages/profil/profil.page';

@NgModule({
  declarations: [
    AppComponent,
    AbonnementPage,
    AccueilPage,
    CguPage,
    ConseilsPage,
    ContactPage,
    FlyerPage,
    GaleriePage,
    HomePage,
    IntroPage,
    LoginPage,
    NutristatsPage,
    ParametrePage,
    ProfilPage
  ],
  entryComponents: [
    AppComponent,
    AbonnementPage,
    AccueilPage,
    CguPage,
    ConseilsPage,
    ContactPage,
    FlyerPage,
    GaleriePage,
    HomePage,
    IntroPage,
    LoginPage,
    NutristatsPage,
    ParametrePage,
    ProfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
