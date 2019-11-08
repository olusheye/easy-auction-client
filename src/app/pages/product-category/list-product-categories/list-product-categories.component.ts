import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ProductCategoryService } from 'src/app/_services/product-category.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product-categories',
  templateUrl: './list-product-categories.component.html',
  styleUrls: ['./list-product-categories.component.css']
})
export class ListProductCategoriesComponent implements OnInit {
  categories: Category[];
  isLoading = true;
  modalContent: Category;
  form: FormGroup;
  isSubmitted = false;
  submitted = false;
  constructor(private fb: FormBuilder,
    private productCategoryService: ProductCategoryService,
    private modalService: NgbModal,
    private route: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      categoryName: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.productCategoryService.getProductCategories()
      .subscribe(data => {
        this.categories = data;
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
      });
  }
  openModal(content: any, product: Category) {
    this.modalContent = product;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
  closeModal() {
    this.form.reset();
    this.modalService.dismissAll();
  }
  openAddCategoryModal(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
  createCategory() {

  }
  get f(): any {
    return this.form.controls;
  }
  get formData() {
    return this.form.value;
  }
  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    let postData = {};

    const category = {
      productCategoryName: this.formData.categoryName,
      description: this.formData.description
    } as Category;

    this.productCategoryService.addProductCategory(category)
      .subscribe(data => {
        postData = data;
        this.isSubmitted = false;
        this.categories.push(category);
        this.closeModal();
      }, err => {
        this.isSubmitted = false;
        console.log(err);
      });
    return postData;
  }
}
