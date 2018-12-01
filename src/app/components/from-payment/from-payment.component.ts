import { Component, OnInit } from '@angular/core';
import {Payement}from'../../payement';

import {Router} from '@angular/router';
import{PayementService} from '../../shared_service/payement.service';
import {Fournisseur}from'../../fournisseur';
import{FournisseurService} from '../../shared_service/fournisseur.service';

@Component({
  selector: 'app-from-payment',
  templateUrl: './from-payment.component.html',
  styleUrls: ['./from-payment.component.css']
})
export class FromPaymentComponent implements OnInit {

  private payement:Payement;
  private fournisseur:Fournisseur;
  private fournisseurs:Fournisseur[];
  //private _fournisseurService:FournisseurService;
  
  constructor(private _fournisseurService:FournisseurService, private _payementService:PayementService,private _rotuer:Router ) { }

  ngOnInit() {
    this.payement=this._payementService.getter();
    this.fournisseur=this._fournisseurService.getter()
    this._fournisseurService.getFournisseur().subscribe((fournisseurs)=>{
      console.log(fournisseurs);
      this.fournisseurs=fournisseurs;
    },(error)=>{
      console.log(error);
    }
  )
    
  }

  processForm(){
    if(this.payement.id==undefined){
       this._payementService.createPayement(this.payement).subscribe((payement)=>{
         console.log(payement);
         this._rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this._payementService.updatePayement(this.payement).subscribe((payement)=>{
         console.log(payement);
         this._rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }
  }

}

