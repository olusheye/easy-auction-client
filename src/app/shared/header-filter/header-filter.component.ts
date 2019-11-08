import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-filter',
  templateUrl: './header-filter.component.html',
  styleUrls: ['./header-filter.component.css']
})
export class HeaderFilterComponent implements OnInit {

  productCategories: { CategoryId: number, CategoryName: string }[];

  form: FormGroup;
  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.productCategories = [
      { CategoryId: 1, CategoryName: 'Jeweleries' },
      { CategoryId: 2, CategoryName: 'Books' }];
    this.form = this.fb.group({
      product: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }
  onFilterSubmit() {
    // 'product-search/productName/:productId/categoryId/:categoryId',
    this.route.navigate(['/product-search', 'productName', 1, 'categoryId', 1]);
  }
  onCategoryChange(event: { target: { value: any; }; }) {
    console.log(event);
    console.log(event.target.value);

  }
}
