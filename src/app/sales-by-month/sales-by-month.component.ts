import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.scss']
})
export class SalesByMonthComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'line',
      height: 225
    },
    title:{
      text: 'Month wise sales'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'

      ]
    },
    yAxis: {
      title: {
        text: 'Revenu in $'
      }
    },
    series: [
      {
        name: "ACE Divino",
        type: "line",
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139]
      },
      {
        name: "Nirala",
        type: "line",
        data: [147, 153, 135, 158, 269, 32, 123, 171, 182, 199, 159]
      },

      {
        name: "Godrej Woods",
        type: "line",
        data: [117, 322, 314, 325, 218, 319, 322, 343, 211, 332, 229, 359]
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
