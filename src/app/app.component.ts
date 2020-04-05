import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-router-demo';
  productId = 1234;
  constructor(private router: Router) {}
  navigateToProductDetail() {
    this.router.navigateByUrl('/product/123456');
  }
}