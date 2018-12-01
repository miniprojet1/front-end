import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListfournisseurComponent } from './components/listfournisseur/listfournisseur.component';
import { FournisseurFromComponent } from './components/fournisseur-from/fournisseur-from.component';

import {FournisseurService} from'./shared_service/fournisseur.service';
import{HttpModule} from '@angular/http';
import {Listarticlecomponent} from './components/listarticle/listarticle.component';
import {ArticleService} from'./shared_service/article.service';
import{PayementService} from './shared_service/payement.service';


import{FormsModule} from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { FromArtComponent } from './components/from-art/from-art.component';
import { LoginComponent } from './components/login/login.component';
import { ListpaymentComponent } from './components/listpayment/listpayment.component';
import { FromPaymentComponent } from './components/from-payment/from-payment.component';
import { ListemployeComponent } from './components/listemploye/listemploye.component';

const appRoutes:Routes=[
  {path:'listfournisseur',component:ListfournisseurComponent},
  {path:'ajoutfournisseur',component:FournisseurFromComponent},
  {path:'listarticle',component:Listarticlecomponent},
  {path:'ajoutarticle',component:FromArtComponent},
  {path: 'accueil',component:AccueilComponent},
  {path: 'home',component:HomeComponent},
  {path: '',component:LoginComponent},
  {path: 'listpayement',component:ListpaymentComponent},
  {path: 'ajoutpayement',component:FromPaymentComponent},
  {path: 'listemploye',component:ListemployeComponent}


] 
@NgModule({
  declarations: [
    AppComponent,
    ListfournisseurComponent,
    FournisseurFromComponent,
    Listarticlecomponent,
    ListemployeComponent,
    HomeComponent,
    AccueilComponent,
    FromArtComponent,
    LoginComponent,
    ListpaymentComponent,
    FromPaymentComponent,
    ListemployeComponent
  ],
  imports: [
    BrowserModule,HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
   
 
    
  ],
  providers: [Listarticlecomponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
