import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: { categoryName: string, categoryImage: string }[];
  counter = 0;
  constructor() { }

  ngOnInit() {
    this.categories =
      [{ categoryName: 'Watches', categoryImage: 'assets/img/cat-01.jpg' },
      { categoryName: 'Sunglasses', categoryImage: 'assets/img/cat-02.jpg' },
      { categoryName: 'Jewelery', categoryImage: 'assets/img/cat-03.jpg' },
      { categoryName: 'Collectibles', categoryImage: 'assets/img/cat-04.jpg' },
      { categoryName: 'Fashion', categoryImage: 'assets/img/cat-05.jpg' },
      { categoryName: 'Computers & Electronics', categoryImage: 'assets/img/cat-06.jpg' },
      { categoryName: 'Home & Health', categoryImage: 'assets/img/cat-07.jpg' },
      { categoryName: 'Discount Certificates', categoryImage: 'assets/img/cat-08.jpg' },
      { categoryName: 'Sports Memorabilia', categoryImage: 'assets/img/cat-09.jpg' },
      { categoryName: 'Travel', categoryImage: 'assets/img/cat-10.jpg' },
      ];
  }

}
