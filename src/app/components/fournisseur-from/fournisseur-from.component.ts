import { Component, OnInit } from '@angular/core';
import {Fournisseur}from'../../fournisseur';
import {Router} from '@angular/router';
import{FournisseurService} from '../../shared_service/fournisseur.service';
@Component({
  selector: 'app-fournisseur-from',
  templateUrl: './fournisseur-from.component.html',
  styleUrls: ['./fournisseur-from.component.css']
})
export class FournisseurFromComponent implements OnInit {
private fournisseur:Fournisseur;
  constructor(private _fournisseurService:FournisseurService,private _rotuer:Router ) { }

  ngOnInit() {
    this.fournisseur=this._fournisseurService.getter();
  }
  processForm(){
    if(this.fournisseur.id==undefined){
       this._fournisseurService.createFournisseur(this.fournisseur).subscribe((fournisseur)=>{
         console.log(fournisseur);
         this._rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this._fournisseurService.updateFournisseur(this.fournisseur).subscribe((fournisseur)=>{
         console.log(fournisseur);
         this._rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }
  }

}
