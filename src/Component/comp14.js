import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function comp14() {
    const series= [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }, {
        name: 'series2',
        data: [4, 23, 54, 23, 43, 25, 14]
      }]
      const options= {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      }
  return (
    <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12">
    
    <div class="card card-default monthlyattendance">
        <div class="card-body stockaging">
            <div class="d-flex flex-wrap">
                <i class="icon-calender card_header align-self-center font-size"></i>
                <div>
                    <h4 class="card-title">Monthly Attendance</h4>
                    <h6>2021-2022</h6>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    
                    {/* <div class="ct-svg-chart" style={{height: '200px',width:'auto'}}></div> */}
                    <ReactApexChart options={options} series={series} type="area" height={200} />
                    
                </div>
            </div>
            <ul class="list-inline m-t-20 text-center">
                <li>
                    <h6 class="text-muted"><i class="fa fa-circle text-info"></i> Absent</h6>
                </li>
                <li>
                    <h6 class="text-muted"><i class="fa fa-circle text-danger"></i> Present</h6>
                </li>
                <li>
                    <h6 class="text-muted"><i class="fa fa-circle text-danger"></i> late</h6>
                </li>
            </ul>
        </div>
    </div>

</div>
  )
}
