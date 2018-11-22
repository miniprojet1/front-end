import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListfournisseurComponent } from './components/listfournisseur/listfournisseur.component';
import { FournisseurFromComponent } from './components/fournisseur-from/fournisseur-from.component';
import {FournisseurService} from'./shared_service/fournisseur.service';
import{HttpModule} from '@angular/http';


import{FormsModule} from '@angular/forms';
const appRoutes:Routes=[
  {path:'',component:ListfournisseurComponent},
  {path:'op',component:FournisseurFromComponent}

] 
@NgModule({
  declarations: [
    AppComponent,
    ListfournisseurComponent,
    FournisseurFromComponent
  ],
  imports: [
    BrowserModule,HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
   
 
    
  ],
  providers: [FournisseurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
