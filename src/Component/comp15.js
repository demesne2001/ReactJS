import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function comp15() {
    const series= [{
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 22, 43, 21, 49]
      }, {
        name: 'PRODUCT B',
        data: [13, 23, 20, 8, 13, 27, 33, 12]
      }, {
        name: 'PRODUCT C',
        data: [11, 17, 15, 15, 21, 14, 15, 13]
      }]
      const options= {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          stackType: '100%'
        },
        plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '30%',
              endingShape: 'rounded'
            },
          },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: 10,
              offsetY: 0
            }
          }
        }],
        xaxis: {
          categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2',
            '2012 Q3', '2012 Q4'
          ],
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'right',
          offsetX: 0,
          offsetY: 50
        },
      }
  return (
    <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12">
   
    <div class="card monthlyattendance">
        <div class="card-body stockaging">
            <div class="d-flex flex-wrap">
                <i class="mdi mdi-chart-areaspline card_header font-size"></i>
                <h4 class="card-title">Stock v/s Sales</h4>
            </div>
            <div class="text-center">
                <h4>Brand Name</h4>
            </div>
          
            <div class="row">
                <div class="col-12">
                    {/* <div class="sales-bars-chart" style={{height: '175px',width:'auto'}}> </div> */}
                    <ReactApexChart options={options} series={series} type="bar" height={180} />
                </div>
            </div>

            
            <ul class="list-inline m-t-20 text-center">
                <li>
                    <h6 class="text-muted"><i class="fa fa-circle text-info"></i> StockQty</h6>
                </li>
                <li>
                    <h6 class="text-muted"><i class="fa fa-circle text-danger"></i> SalesQty
                    </h6>
                </li>
            </ul>
        </div>
    </div>
   
</div>
  )
}
