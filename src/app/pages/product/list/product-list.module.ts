import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ProductAddModule } from '../add/product-add.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductCardModule } from '../card/product-card.module';
import { ContainerModule } from '../../../shared/components/container/container.module';
import { ProductListRoutingModule } from './product-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule, ProductListRoutingModule, MatToolbarModule, ContainerModule, ProductCardModule, MatButtonModule, MatIconModule, ProductAddModule,
    MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule
  ]
})
export class ProductListModule { }
