import React from 'react'
import ReactApexChart from 'react-apexcharts'
export default function comp8() {
   
          
        const series= [{
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        // }, {
        //   name: 'Revenue',
        //   data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        // }, {
        //   name: 'Free Cash Flow',
        //   data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
         }]
         const options= {
            chart: {
              type: 'bar',
              height: 0
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
              title: {
                text: '$ (thousands)'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "$ " + val + " thousands"
                }
              }
            }
          }
        
        
        
  return (
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                         
                          <div class="card">
                              <div class="card-body stockaging">
                                  <div class="d-flex flex-wrap">
                                      <i class="fa fa-signal card_header font-size"></i>
                                      <h4 class="card-title">Stock Aging</h4>
                                  </div>

                                  {/* <div class="ct-donute-chart" style={{height: '257px', width:'auto'}}></div> */}

                                  <ReactApexChart options={options} series={series} type="bar" height={257} />
                                  <ul class="list-inline m-t-20 text-center">
                                      <li>
                                          <h6 class="text-muted"><i class="fa fa-circle text-info"></i> Amt</h6>
                                      </li>
                                      <li>
                                          <h6 class="text-muted"><i class="fa fa-circle text-danger"></i> Qty</h6>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          
                      </div>
  )
}
