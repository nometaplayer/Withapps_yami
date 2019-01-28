import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'abonnement', loadChildren: './abonnement/abonnement.module#AbonnementPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cgu', loadChildren: './cgu/cgu.module#CguPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },

  { path: 'parametre', loadChildren: './parametre/parametre.module#ParametrePageModule' },
  { path: 'galerie', loadChildren: './galerie/galerie.module#GaleriePageModule' },

  { path: 'parametres', loadChildren: './parametres/parametres.module#ParametresPageModule' },
  { path: 'galerie', loadChildren: './galerie/galerie.module#GaleriePageModule' },
  { path: 'flyer', loadChildren: './flyer/flyer.module#FlyerPageModule' },
  { path: 'conseils', loadChildren: './conseils/conseils.module#ConseilsPageModule' },
  { path: 'accueil', loadChildren: './accueil/accueil.module#AccueilPageModule' },
  { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule' },
  { path: 'nutristats', loadChildren: './nutristats/nutristats.module#NutristatsPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
