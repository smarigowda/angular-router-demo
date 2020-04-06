import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ProductDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
