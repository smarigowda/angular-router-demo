import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId: string;

  constructor(private activeRoute: ActivatedRoute) { 
    this.productId = activeRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(queryParams => {
      console.log('query params changed...', queryParams);
    });
    this.activeRoute.params.subscribe(routeParams => {
      console.log('route params changed', routeParams);
      this.productId = routeParams.id;
    });
  }
}
