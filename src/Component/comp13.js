import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function comp13() {
    const series= [
        {
          name: 'Q1 Budget',
          group: 'budget',
          data: [44000, 55000, 41000, 67000, 22000, 43000]
        },
        {
          name: 'Q1 Actual',
          group: 'actual',
          data: [48000, 50000, 40000, 65000, 25000, 40000]
        },
        {
          name: 'Q2 Budget',
          group: 'budget',
          data: [13000, 36000, 20000, 8000, 13000, 27000]
        },
        {
          name: 'Q2 Actual',
          group: 'actual',
          data: [20000, 40000, 25000, 10000, 12000, 28000]
        }
      ]
      const options= {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        dataLabels: {
          formatter: (val) => {
            return val / 1000 + 'K'
          }
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        xaxis: {
          categories: [
            'Online advertising',
            'Sales Training',
            'Print advertising',
            'Catalogs',
            'Meetings',
            'Public relations'
          ]
        },
        fill: {
          opacity: 1
        },
        colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
        yaxis: {
        //   labels: {
        //     formatter: (val) => {
        //       return val / 1000 + 'K'
        //     }
        //   }
        tickAmount:5
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left'
        }
      }
  return (
    <div class="col-xl-4 col-lg-12  col-md-12 col-sm-12">
   
    <div class="card">
        <div class="card-body stockaging">
            <div class="d-flex flex-wrap">
                <i class="fa fa-signal card_header font-size"></i>
                <h4 class="card-title">Cashier wise sales</h4>
            </div>
           

            {/* <div class="ct-bar-chart" style={{height: '240px',marginTop:'15px'}}></div> */}
            <ReactApexChart options={options} series={series} type="bar"  height={257} />

            
            <div class="text-center">
                <h4>Qty : 2,57,980</h4>
            </div>
        </div>
    </div>
  
</div>
  )
}
