import { ContainerModule } from '../../../shared/components/container/container.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CategoryListRoutingModule } from './category-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list.component';
import { CategoryCardModule } from '../card/category-card.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule, CategoryListRoutingModule, MatToolbarModule, ContainerModule, CategoryCardModule,
    MatProgressSpinnerModule
  ]
})
export class CategoryListModule { }
