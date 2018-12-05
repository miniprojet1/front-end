import { Component, OnInit } from '@angular/core';
import {CommandeService} from '../../shared_service/commande.service';
import {Commande} from '../../commande';
import {Router} from '@angular/router';
@Component({
  selector: 'app-listcommande',
  templateUrl: './listcommande.component.html',
  styleUrls: ['./listcommande.component.css']
})
export class ListcommandeComponent implements OnInit {
private commandes: Commande[];
  constructor(private _commandeService:CommandeService,private _router:Router) { }

  ngOnInit() {
    this._commandeService.getCommande().subscribe((commandes)=>{
        console.log(commandes);
        this.commandes=commandes;
      },(error)=>{
        console.log(error);
      }
    )

  }
  deleteCommande(commande){
    this._commandeService.deleteCommande(commande.id).subscribe((data)=>{
        this.commandes.splice(this.commandes.indexOf(commande),1);
      }

    )


  }

  updateCommande(commande){
    this._commandeService.setter(commande);
    this._router.navigate(['/ajoutcommande']);

  }
  createArticle(){
    /*let article =new Article();
    this._articleService.setter(article);
    this._router.navigate(['/ajout']);
  */
  }
  }


