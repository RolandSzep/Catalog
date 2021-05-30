import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../../shared/models/category.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
  @Input() category: Category = {} as any;
  @Output() getCategory = new EventEmitter<Category>();

  constructor() { }

  ngOnInit(): void {
  }

}
