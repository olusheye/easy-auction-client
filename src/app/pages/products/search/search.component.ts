import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  products: Product[] = new Array<Product>();
  categoryName: string;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(data => {
        this.products = data;
      });

  }

}
