import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Category } from '../../../shared/models/category.model';
import { FbBaseService } from '../../../services/fb-base.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  list: Category[] | null = null;
  getSub: Subscription | null = null;
  pageState = '';
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
    href: new FormControl(''),
    isBundle: new FormControl(false),
    isSellable: new FormControl(false),
    lastUpdate: new FormControl(null),
    lifecycleStatus: new FormControl(''),
    statusReason: new FormControl(''),
    version: new FormControl(''),
    validFor: new FormControl(null),
    category: new FormControl(null, [Validators.required])
  });

  constructor(public dialogRef: MatDialogRef<ProductAddComponent>, private service: FbBaseService<Category>) { }

  ngOnInit(): void {
    this.get();
  }

  ngOnDestroy(): void {
    if (this.getSub) {
      this.getSub.unsubscribe();
    }
  }

  get(): void {
    this.pageState = 'loading';
    this.getSub = this.service.get('categories').subscribe(
      result => {
        if (result?.length > 0) {
          this.list = result;
          console.log(this.list);
          this.pageState = 'data';
        } else {
          this.pageState = 'noData';
        }
      },
      err => {
        console.log(err);
        this.pageState = '';
      });
  }

}
