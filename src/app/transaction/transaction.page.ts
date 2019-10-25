import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TransactionService } from './transaction.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  but: boolean;
  f: FormGroup;
  tarif: any;
  code: any;
  inf = false;
  constructor(private transaction: TransactionService , private route: Router) { }
  // Pour la fonction FormGroup
  ngOnInit() {
    this.init();
  }
  init() {
    this.f = new FormGroup({
      prenomEnvoyeur : new FormControl('', [ Validators.required, Validators.minLength(3)]),
      nomEnvoyeur : new FormControl('', Validators.required),
      telEnvoyeur : new FormControl('',  [Validators.required, Validators.minLength(9)]),
      prenom : new FormControl('', [Validators.required, Validators.minLength(3)]),
      nom : new FormControl('', Validators.required),
      tel: new FormControl('',  [Validators.required, Validators.minLength(9)]),
      montant : new FormControl('', Validators.required),
      cni : new FormControl('', Validators.required),
      codeEnvoie : new FormControl('', Validators.required)
      // tslint:disable-next-line: semicolon
    })
  }
  frais(f) {
  console.log(f);
  this.transaction.frais(this.f.value).subscribe(
    res => {
      this.tarif = res;
      console.log(res);
    },
    err => {
      console.log(err);
    }
  );
  }
  envoie(f) {
console.log(f);
this.transaction.envoie(this.f.value)
.subscribe(
  res => {
    console.log(res);
    if (res.message) {

    this.init();
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Envoi réussie!!!',
      text: res.message,
      showConfirmButton: true,
    });
  }
  },
  err => {
    console.log(err);
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'Parametre incorrect!',
      footer: '<a href>Saisir les bons identifiant ?</a>'
    });
  }
);
}
retrait(f) {
  console.log(f);
  this.transaction.retrait(this.f.value)
.subscribe(
  data => {
    console.log(data);
    if (data.Message) {
      Swal.fire({
        position: 'top-end',
        type: 'error',
        title: 'Oops...',

        text: data.Message,
       // footer: '<a href>code Retirer ou code invalide ?</a>'},
        showConfirmButton: true,
        timer: 1500,
      });
  } else if (data.Messages) {
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Retrait réussie!!!',
      text: data.Messages,
      showConfirmButton: true,
      timer: 1500
    });

  }
    this.init();
  },

  error => {
  console.log(error);


  }
);
}

findcode() {

  this.transaction.findcode(this.f.value).subscribe(
res => {
  this.code = res;
  console.log(res);
  this.info();
},
err => {
  console.log(err);
}
 );
}
  buttonEnvoie() {
    this.but = false;
  }
  buttonRetrait() {
    this.but = true;

  }
info() {
  this.inf = true;
}

}
