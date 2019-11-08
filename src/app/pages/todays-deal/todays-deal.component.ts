import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todays-deal',
  templateUrl: './todays-deal.component.html',
  styleUrls: ['./todays-deal.component.css']
})
export class TodaysDealComponent implements OnInit {

  todaysDeal: {
    price: number;
    image: string;
    description: string;
    name: string;
  };
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.todaysDeal = {
      name: 'test',
      price: 1000,
      image: 'assets/img/pic04.jpg',
      description:
        'VACATION RENTAL CERTIFICATES!!!' +
        'New Redemption Site With New Features! One Week Vacation Rentals with Travel over the Next Two Years!'
    };
  }

}
