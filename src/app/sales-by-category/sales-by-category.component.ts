import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.scss']
})
export class SalesByCategoryComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'pie',
      height: 225
    },
    title: {
      text: 'Category wise sales'
    },
    xAxis: {
      categories: [
        'Ace Divino',
        'Nirala',
        'Godrej Woods',
        'Shahara'
      ]
    },
    yAxis: {
      title: {
        text: 'Revenu in %'
      }
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            name: 'Ace Divino',
            y: 41.0,
            color: '#044342'
          },
          {
            name: 'Nirala',
            y: 9.5,
            color: '#ed9e20'
          },
          {
            name: 'Godrej Woods',
            y: 15.5,
            color: '#121212'
          },
          {
            name: 'Shahara',
            y: 4.5,
            color: '#6920fb'
          }
        ]
      }
    ],
    credits: {
    enabled: false
  }
  })
constructor() { }

ngOnInit(): void {

}

}
