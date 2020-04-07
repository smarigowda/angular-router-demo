import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { LoginGuard } from './login.guard';
import { UnsavedChangesGuard } from './unsaved.changes.guard';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductDescriptionComponent,
    SellerInfoComponent,
    ChatComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [LoginGuard, UnsavedChangesGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
