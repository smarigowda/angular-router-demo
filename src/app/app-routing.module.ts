import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { LoginGuard } from './login.guard';
import { UnsavedChangesGuard } from './unsaved.changes.guard';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chat', component: ChatComponent, outlet: 'aux' },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
    canDeactivate: [UnsavedChangesGuard],
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        component: ProductDescriptionComponent,
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
