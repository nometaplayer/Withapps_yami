import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'home', loadChildren: '../pages/home/home.module#HomePageModule' },
  { path: 'intro', loadChildren: '../pages/intro/intro.module#IntroPageModule' },
  { path: 'abonnement', loadChildren: '../pages/abonnement/abonnement.module#AbonnementPageModule' },
  { path: 'login', loadChildren: '../pages/login/login.module#LoginPageModule' },
  { path: 'cgu', loadChildren: '../pages/cgu/cgu.module#CguPageModule' },
  { path: 'contact', loadChildren: '../pages/contact/contact.module#ContactPageModule' },

  { path: 'parametre', loadChildren: '../pages/parametre/parametre.module#ParametrePageModule' },
  { path: 'galerie', loadChildren: '../pages/galerie/galerie.module#GaleriePageModule' },

  { path: 'parametres', loadChildren: '../pages/parametres/parametres.module#ParametresPageModule' },
  { path: 'galerie', loadChildren: '../pages/galerie/galerie.module#GaleriePageModule' },
  { path: 'flyer', loadChildren: '../pages/flyer/flyer.module#FlyerPageModule' },
  { path: 'conseils', loadChildren: '../pages/conseils/conseils.module#ConseilsPageModule' },
  { path: 'accueil', loadChildren: '../pages/accueil/accueil.module#AccueilPageModule' },
  { path: 'profil', loadChildren: '../pages/profil/profil.module#ProfilPageModule' },
  { path: 'nutristats', loadChildren: '../pages/nutristats/nutristats.module#NutristatsPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
