import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

public menus = [
  {title: 'Home',
  url: '/menu/home',
   icon: 'home'},
  {title: 'Déconnexion', url: '/auth', icon: 'log-out'},
   {title: 'Transaction', url: '/menu/transaction', icon: 'swap'},
   {title: 'Liste Transactions', url: '/menu/list', icon: 'list'},



];
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

onMenuAction(m) {
  if (m.title === 'logout') {
    this.authService.logout();
  }
  this.router.navigateByUrl(m.url);
}

}
