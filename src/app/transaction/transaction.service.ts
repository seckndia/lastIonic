import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(private http: HttpClient) { }

private urlEnvoie = ' http://localhost:8000/api/envoi';
private urlFrais = 'http://localhost:8000/api/fraisMontant';
private urlRetrait = 'http://localhost:8000/api/retrait';
private urlFindcode = 'http://localhost:8000/api/findcode';
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

}
