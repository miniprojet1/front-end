import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http' ;
import {Commande} from '../commande';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private baseUrl:string='http://localhost:8080';
  private headers = new Headers({'Content-Type':'application/json'}) ;
  private options=new RequestOptions({headers:this.headers})

  private commande= new Commande();
  constructor(private _http:Http) { }
  getCommande(){
    return this._http.get(this.baseUrl+'/Panier',this.options).pipe(map((response:Response)=>response.json()))



  }
  deleteCommande(id:Number){
    return this._http.delete(this.baseUrl+'/Panier/'+id,this.options).pipe(map((response:Response)=>response.json()));

  }
  createCommande(commande:Commande){
    return this._http.post(this.baseUrl+'/Panier',JSON.stringify(commande), this.options).pipe(map((response:Response)=>response.json()));

  }
  updateCommande(commande:Commande){
    return this._http.put(this.baseUrl+'/Panier',JSON.stringify(commande), this.options).pipe(map((response:Response)=>response.json()));

  }
  setter(commande:Commande){
    this.commande=commande;
  }
  getter(){
    return this.commande;
  }


}

