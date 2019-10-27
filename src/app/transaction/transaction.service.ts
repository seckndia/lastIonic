import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../model/transaction';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  selecTrans: Transaction;
  constructor(private http: HttpClient) { }

private urlEnvoie = ' http://localhost:8000/api/envoi';
private urlFrais = 'http://localhost:8000/api/fraisMontant';
private urlRetrait = 'http://localhost:8000/api/retrait';
private urlFindcode = 'http://localhost:8000/api/findcode';
private urllistEnvoie = 'http://localhost:8000/api/transPeriode';
private urllistRetrait = 'http://localhost:8000/api/transPeriodeRetrait';
private urlDetailTrans = 'http://localhost:8000/api/listeTransUser' ;
envoie(env) {

  return this.http.post<any>(this.urlEnvoie, env);
}

frais(f) {
  return this.http.post<any>(this.urlFrais, f);

}

retrait(retrait) {
  return this.http.post<any>(this.urlRetrait, retrait);
}
 findcode(f) {
return this.http.post<any>(this.urlFindcode, f);
}

listeEnvoie(f) {
  return this.http.post<any>(this.urllistEnvoie, f);
  }
  listeRetrait(f) {
    return this.http.post<any>(this.urllistRetrait, f);
    }

    detailTrans(f) {
      return this.http.post<any>(this.urlDetailTrans, f);

    }
}
