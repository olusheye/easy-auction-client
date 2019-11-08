import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Bid } from '../models/bid';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }
  addProduct(formData: FormData) {
    return this.http.post(`${config.apiUrl}/product`, formData);
  }
  getProducts() {
    return this.http.get<Product[]>(`${config.apiUrl}/product`);
  }
  getProductById(id: string) {
    return this.http.get<Product>(`${config.apiUrl}/product/${id}`);
  }
  placeBid(formData: Bid) {
    return this.http.post(`${config.apiUrl}/bid`, formData);
  }
}
