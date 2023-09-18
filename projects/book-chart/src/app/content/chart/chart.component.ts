import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
 // Pie
 public pieChartOptions: ChartOptions<'pie'> = {
  responsive: true, 
  plugins: {
      legend: {
        position: 'right',
      },
    },
  };
  public pieChartLabels = [ [ 'Fiction, Id: 1'  ], [ 'Non-fiction, Id: 2' ], ['Reference, Id: 3'], ['Technical, Id: 4'], ['Religion, Id: 5'],
                            ['Poetry, Id: 6'], ['Children Book, Id: 7'], ['Comics and Graphics, Id: 8'], ['Education, Id: 9'],
                            ['Scientific journals, Id: 10'] ];
  public pieChartDatasets = [ {
    data: [ 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public chartWidth = 400; 
  public chartHeight = 400;
}
