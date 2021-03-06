import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { RouterModule } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  productCategory: string;
  sellerId = '98767';

  name: FormControl = new FormControl();

  constructor(private activeRoute: ActivatedRoute) { 
    this.productId = activeRoute.snapshot.paramMap.get('id');
    this.productCategory = activeRoute.snapshot.queryParamMap.get('category');
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(queryParams => {
      console.log('query params changed...', queryParams);
      this.productCategory = queryParams.category;
    });
    this.activeRoute.params.subscribe(routeParams => {
      console.log('route params changed', routeParams);
      this.productId = routeParams.id;
    });
  }
}
