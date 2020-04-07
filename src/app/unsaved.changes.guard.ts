import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductDetailComponent> {
    canDeactivate(component: ProductDetailComponent) {
        console.log(component.name);
        if(component.name.dirty && component.name.value !== '') {
            return window.confirm("You have unsaved changes. Still want to leave ?");
        } else {
            return true;
        }
    }
}