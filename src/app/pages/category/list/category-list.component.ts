import { Router } from '@angular/router';
import { Category } from '../../../shared/models/category.model';
import { FbBaseService } from '../../../services/fb-base.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit, OnDestroy {
  title = 'Kategóriák';
  list: Category[] | null = null;
  getSub: Subscription | null = null;
  pageState = '';

  constructor(private service: FbBaseService<Category>, private router: Router) { }

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
