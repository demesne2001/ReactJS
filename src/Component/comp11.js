import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function comp11() {
    const series= [
        {
          name: "High - 2013",
          data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
          name: "Low - 2013",
          data: [12, 11, 14, 18, 17, 13, 13]
        }
      ]
      const options= {
        chart: {
          height: 350,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },
       
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          title: {
            text: 'Month'
          }
        },
        yaxis: {
          min: 10,
          max: 40,
          tickAmount:3
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      }
    
  return (
    <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12">
   
    <div class="card monthlyattendance">
        <div class="card-body stockaging">
            <div class="d-flex flex-wrap">
                <i class="mdi mdi-chart-bar card_header align-self-center font-size"></i>
                <div>
                    <h4 class="card-title">Current V/S past Amount</h4>
                    <h6>2021-2022</h6>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table product-overview">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Target Amt</th>
                            <th>Achieved Amt</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2021</td>
                            <td>1,,98,52,12,902.00</td>
                            <td>1,00,000.00</td>
                        </tr>
                        <tr>
                            <td>2021</td>
                            <td>1,12,902.00</td>
                            <td>1,000.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="row">
                <div class="col-12">
                    {/* <div id="morris-area-chart" style={{height:'125px',width:'auto'}}></div> */}
                    <ReactApexChart options={options} series={series} type="line" height={190} />
                </div>
            </div>
            {/* <ul class="list-inline m-t-20 text-center">
                <li>
                    <h6 class="text-muted"><i class="fa fa-circle text-info"></i> Achieved</h6>
                </li>
                <li>
                    <h6 class="text-muted"><i class="fa fa-circle text-danger"></i> Target</h6>
                </li>
            </ul> */}
        </div>
    </div>
    
</div>
  )
}
