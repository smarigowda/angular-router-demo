import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
    children: [
      {
        path: '',
        component: ProductDescriptionComponent,
        canActivate: [LoginGuard],
      },
      { path: 'seller/:id', component: SellerInfoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
