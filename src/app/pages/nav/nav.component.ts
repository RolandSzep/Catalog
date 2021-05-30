import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { PAGES } from '../../shared/database/page.database';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  pages = PAGES;
  name = "";

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.name = this.authService.getCurrentUserName();
    if (this.name == null) this.name = "Menü";
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
