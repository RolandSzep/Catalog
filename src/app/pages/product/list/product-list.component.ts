import { FbBaseService } from '../../../services/fb-base.service';
import { Product } from '../../../shared/models/product.model';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ProductAddComponent } from '../add/product-add.component';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  title = 'Termékek';
  list$: Observable<Product[]> | null = null;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions$: Observable<string[]> | null = null;

  errorObject = null;

  constructor(private service: FbBaseService<Product>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
    this.myControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        map(value => this.search(value))
      );
  }

  get(): void {
    this.errorObject = null;
    this.list$ = this.service.get('products').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  search(value: string): void {
    this.errorObject = null;
    this.list$ = this.service.search('products', value).pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((product: Product) => {
      console.log(product);
      if (product?.name) {
        this.service.add('products', product).then(id => { console.log(id); });
      }
    }, err => {
      console.warn(err);
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
