import { Component, OnInit } from '@angular/core';
import  {Commande} from '../../commande';
import {Router} from '@angular/router';
import {CommandeService} from '../../shared_service/commande.service';

@Component({
  selector: 'app-commande-form',
  templateUrl: './commande-form.component.html',
  styleUrls: ['./commande-form.component.css']
})
export class CommandeFormComponent implements OnInit {
private commande:Commande;
  constructor(private _commandeService:CommandeService,private _rotuer:Router) { }

  ngOnInit() {
  }

}
