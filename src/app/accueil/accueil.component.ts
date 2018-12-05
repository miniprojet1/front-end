import { Component, OnInit } from '@angular/core';
import {Panier} from'../panier';
import {Router} from '@angular/router';
import {PanierService} from '../shared_service/panier.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  private panier: Panier;
  constructor( private _panierService: PanierService, private _rotuer:Router ) { }

  ngOnInit() {
  }
  processForm() {
    this._panierService.createPanier(this.panier).subscribe((panier) => {
      console.log(panier);
      this._rotuer.navigate(['/']);
    }, (error) => {
      console.log(error);
    });
  }
}
