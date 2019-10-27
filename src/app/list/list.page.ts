import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TransactionService } from '../transaction/transaction.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {
  detailTs: any;

  constructor(private transaction: TransactionService,
              private formGroup: FormBuilder,
              private router: Router ) { }
  but: boolean;
  detaitTransaction = this.formGroup.group({
    debut: [''],
    fin: ['']
  });

  ngOnInit() {
  }
  listEnvoi(data: any) {
    console.log(data);
    this.transaction.listeEnvoie(this.detaitTransaction.value)
        .subscribe(
       // tslint:disable-next-line: no-shadowed-variable
       data => {
       console.log(data);
       this.detailTs = data;


       }, err => {
        console.log(err);
       }
     );
   }
   listRetrait(data: any) {
    console.log(data);
    this.transaction.listeRetrait(this.detaitTransaction.value)
        .subscribe(
       // tslint:disable-next-line: no-shadowed-variable
       data => {
       console.log(data);
       this.detailTs = data;
       // tslint:disable-next-line: no-unused-expression

       }, err => {
        console.log(err);
       }
     );


   }
   goToView(detail: any) {
    this.transaction.selecTrans = detail;
    this.router.navigateByUrl('/detail');
    }
  buttonEnvoie() {
    this.but = false;
  }
  buttonRetrait() {
    this.but = true;

  }
}
