import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/_services/product.service';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bid } from 'src/app/models/bid';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  $counter = new Observable<string>();
  countDownDate: number = new Date('10/31/2019').getTime();
  productId: string;
  msg: string;
  product: Product = new Product();
  form: FormGroup;
  private sub: any;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService,

  ) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      currentBid: ['', Validators.required],
      _id: ['', Validators.required]
    });
    this.sub = this.route.params.subscribe(params => {
      this.productId = params.productId;

    });
    this.productService.getProductById(this.productId).subscribe(data => {
      this.product = data;
    });
    this.$counter =
      interval(1000).pipe(
        map((x) => {
          const now = new Date().getTime();

          // Find the distance between now an the count down date
          const distance = this.countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Display the result in the element with id="demo"
          const time = days + ':' + hours + ':' + minutes + ':' + seconds;

          // If the count down is finished, write some text
          if (distance < 0) {
            return 'Invalid date range';
          }
          return time;
        })
      );

  }
  get formData() {
    return this.form.value;
  }
  placeBid() {
    const bid = {
      currentBid: this.formData.currentBid,
      productId: this.productId,
      bidOwnerId: 'cajk323d'
    } as Bid;
    this.productService.placeBid(bid)
      .subscribe(data => {
        this.product.currentBid = bid.currentBid;
        alert('Successful');
      }, err => {
        alert(err);
      });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getProduct(productId: number) {

  }
  setCountDown(countDownDate: any) {
    // Update the count down every 1 second
    const x = setInterval(() => {
      // Get todays date and time
      const now = new Date('1/4/2015').getTime();

      // Find the distance between now an the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      let time = days + ':' + hours + ':' + minutes + ':' + seconds;

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        time = 'EXPIRED';
      }
    }, 1000);

  }

}
