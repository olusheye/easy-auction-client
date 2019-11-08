import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor(private http: HttpClient) { }
  getProductCategories() {
    return this.http.get<Category[]>(`${config.apiUrl}/product-category`);
  }
  addProductCategory(category: Category) {
    return this.http.post(`${config.apiUrl}/product-category`, category);
  }
  getProductCategoriesById(id: number) {
    return this.http.get<Category>(`${config.apiUrl}/product-category/${id}`);
  }
}
