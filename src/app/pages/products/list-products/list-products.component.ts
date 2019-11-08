import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { ProductService } from 'src/app/_services/product.service';
import { ProductCategoryService } from 'src/app/_services/product-category.service';
import { FileService } from 'src/app/_services/file.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products: Product[];
  modalContent: Product;
  categories: Category[];
  form: FormGroup;
  isLoading = true;
  submitted = false;
  private fileName: any;
  constructor(private productService: ProductService,
              private modalService: NgbModal,
              private fb: FormBuilder,
              private categoryService: ProductCategoryService,

  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      productName: ['', Validators.required],
      priceRangeMin: ['', Validators.required],
      priceRangeMax: ['', Validators.required],
      description: ['', Validators.required],
      image: [''],
      categoryId: ['', Validators.required],
      bidEndTime: ['', Validators.required],

    });
    this.productService.getProducts()
      .subscribe(data => {
        this.products = data;
        this.isLoading = false;
      });
  }
  get fData() {
    return this.form.value;
  }
  openModal(content: any, product: Product) {
    this.modalContent = product;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
  openAddProductModal(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.categoryService.getProductCategories().subscribe(data => {
      this.categories = data;
    });
  }

  closeModal() {
    this.form.reset();
    this.modalService.dismissAll();
  }
  onFileChange(event: { target: HTMLInputElement; }) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      image: file
    });
    this.form.get('image').updateValueAndValidity();
  }
  onSubmit() {
    const product = {
      productName: this.fData.productName,
      priceRangeMax: +this.fData.priceRangeMax,
      priceRangeMin: +this.fData.priceRangeMin,
      bidEndTime: this.fData.bidEndTime,
      currentBid: 0,
      description: this.fData.description,
      imgUrl: this.fData.image,
      title: this.fData.productName,
      categoryId: this.fData.categoryId
    } as Product;

    const formData: any = new FormData();
    formData.append('productName', product.productName);
    formData.append('image', product.imgUrl);
    formData.append('imgUrl', '');
    formData.append('priceRangeMax', product.priceRangeMax);
    formData.append('priceRangeMin', product.priceRangeMin);
    formData.append('bidEndTime', product.bidEndTime);
    formData.append('currentBid', product.currentBid);
    formData.append('description', product.description);
    formData.append('title', product.title);
    formData.append('categoryId', product.categoryId);
    this.productService.addProduct(formData)
      .subscribe(() => {
        this.submitted = false;
        this.products.push(product);
        this.closeModal();
      }, err => {
        this.submitted = false;
        console.log(err);
      });
  }
}
