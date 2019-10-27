import { Component, OnInit } from '@angular/core';
import { TransactionService} from '../transaction/transaction.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  detail: any;

  constructor(private transaction: TransactionService) { }

  ngOnInit() {

    console.log(this.transaction.selecTrans);
    this.detail = this.transaction.selecTrans;
  }

}
