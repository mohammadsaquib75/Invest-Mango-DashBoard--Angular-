import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.scss']
})
export class TopThreeProductsComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'bar',
      height: 225
    },
    title: {
      text: 'Top 3 sales'
    },
    xAxis: {
      categories: [
        'Ace Divino',
        'Nirala',
        'Godrej Woods',
      ]
    },
    yAxis: {
      title: {
        text: 'Revenu in %'
      }
    },
    series: [
      {
        type: 'bar',
        data: [
          {
            name: 'Ace Divino',
            y: 41.0,
            color: '#044342'
          },
          {
            name: 'Nirala',
            y: 29.5,
            color: '#ed9e20'
          },
          {
            name: 'Godrej Woods',
            y: 68.5,
            color: '#121212'
          },
        ]
      }
    ],
    credits: {
    enabled: false
  }
  })

  constructor() {}

  ngOnInit(): void {
      
  }

}
