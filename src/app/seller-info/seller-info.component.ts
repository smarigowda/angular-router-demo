import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-info',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SellerInfoComponent implements OnInit {
  sellerId: string;

  constructor(route: ActivatedRoute) { 
    this.sellerId = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

}
