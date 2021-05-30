import { FbBaseService } from '../../../services/fb-base.service';
import { Product } from '../../../shared/models/product.model';
import { Component, Input, OnInit } from '@angular/core';
import { DocumentReference } from "@angular/fire/firestore";
import { Observable, Subscription } from 'rxjs';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product?: Product;
  @Input() category?: Category;
  getSub: Subscription | null = null;

  constructor(private service: FbBaseService<Product>) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.getSub) {
      this.getSub.unsubscribe();
    }
  }

  getProductCategory(ref: DocumentReference): string | undefined {
    /*if (ref != null) {
      this.getSub = this.service.getById('categories', ref.id).subscribe(
        result => {
          if (result?.length > 0) {
            this.category = result;
          }
        },
        err => {
          console.log(err);
      });
    }*/
    return this.category?.name;
  }

}
