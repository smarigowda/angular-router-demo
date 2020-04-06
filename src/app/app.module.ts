import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { LoginGuard } from './login.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductDescriptionComponent,
    SellerInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [LoginGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
