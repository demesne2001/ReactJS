import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function comp9() {
    const series= [44, 55, 13, 33]
    const options= {
        chart: {
          width: 380,
          type: 'donut',
        },
        dataLabels: {
          enabled: false
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
          position: 'right',
          offsetY: 0,
          height: 230,
        }
      }
       function appendData() {
        var arr = this.state.series.slice()
        arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
      
       
      }

  return (
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                          
                          <div class="card">
                              <div class="card-body stockaging">
                                  <div class="d-flex flex-wrap">
                                      <i class="fa fa-signal card_header font-size"></i>
                                      <h4 class="card-title">Stock Aging</h4>
                                  </div>

                                  {/* <div class="ct-donute-chart" style={{height: '257px',width:'auto'}}></div> */}
                                  <ReactApexChart options={options} series={series} type="donut" height={266} />


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
