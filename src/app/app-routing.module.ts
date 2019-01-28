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
  { path: 'parametres', loadChildren: './parametres/parametres.module#ParametresPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
