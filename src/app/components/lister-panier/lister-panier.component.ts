import { Component, OnInit } from '@angular/core';
import {PanierService} from '../../shared_service/panier.service';
import {Panier } from '../../panier';
import {Router} from '@angular/router';
import {Article} from '../../article';

@Component({
  selector: 'app-lister-panier',
  templateUrl: './lister-panier.component.html',
  styleUrls: ['./lister-panier.component.css']
})
export class ListerPanierComponent implements OnInit {
  private paniers: Panier[];

  constructor(private _panierService: PanierService , private _router:Router) { }

  ngOnInit() {
    this._panierService.getPanier().subscribe((paniers) => {
        console.log( paniers );
        this.paniers = paniers;
      },( error ) => {
        console.log(error);
      }
    )   ;

  }

}
