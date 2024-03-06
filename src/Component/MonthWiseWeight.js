import axios from 'axios'
import React, { useEffect, useState,useContext } from 'react'
import ReactApexChart from 'react-apexcharts'
import Creatcontext from '../context/Creatcontext'
import APIConfig from'../APIConfig'
import post from '../ServiceFile'
// const series = [{
//   name: 'Income',
//   type: 'column',
//   data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
// }, {
//   name: 'Cashflow',
//   type: 'column',
//   data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
// }]

export default function MonthWiseWeight() {

  const [series, setseries] = useState([])
  const [options, setoptions] = useState({})
  const FilterContext = useContext(Creatcontext);
  const [APIInput, setAPIInput] = useState(FilterContext.CommanFilter)
  const{}=APIConfig
  let input1 = APIInput
  let defaultRes={}
  useEffect(() => {
    input1['PrintGroupBy']="MonthName,YearNo"
    setAPIInput(FilterContext.CommanFilter)
  }, [FilterContext.CommanFilter])
  useEffect(() => {
    input1['PrintGroupBy']="MonthName,YearNo"    
    MonthWiseWeightAPI()
  }, [APIInput])
  
  let tempSalesArr = []
  let tempTotalArr = []
  let tempSeriesArr = []
  let MonthArr = []
  function MonthWiseWeightAPI() {
    post(input1, APIConfig.GetStockToSalesAPI, defaultRes, 'post').then((res) => {


      for (let i = 0; i < res.data.lstResult.length; i++) {
        tempSalesArr.push(res.data.lstResult[i].sales)
        tempTotalArr.push(res.data.lstResult[i].Total)

        MonthArr.push(res.data.lstResult[i].MonthName)
      }

      setseries(tempSeriesArr)
      setoptions(optionsdata)
      input1 = APIInput
    })
  }

  let optionsdata =
  {
    chart: {
      height: 350,
      type: 'line',
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [1, 1, 4]
    },
    // title: {
    //   text: 'XYZ - Stock Analysis (2009 - 2016)',
    //   align: 'left',
    //   offsetX: 110
    // },
    xaxis: {
      categories: MonthArr,
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#008FFB'
        },
        labels: {
          style: {
            colors: '#008FFB',
          }
        },
        title: {
          // text: "Income (thousand crores)",
          style: {
            color: '#008FFB',
          }
        },
        tooltip: {
          enabled: true
        }
      },
      {
        seriesName: 'Income',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#00E396'
        },
        labels: {
          style: {
            colors: '#00E396',
          }
        },
        //   title: {
        //     text: "Operating Cashflow (thousand crores)",
        //     style: {
        //       color: '#00E396',
        //     }
        //   },
      },

    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40
    }
  }
  tempSeriesArr.push({
    name: 'Total',
    type: 'column',
    data: tempTotalArr
  })
  tempSeriesArr.push({
    name: 'Sales',
    type: 'column',
    data: tempSalesArr
  })

  return (
    <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">

      <div class="card monthlyattendance">
        <div class="card-body stockaging">
          <div class="d-flex flex-wrap">
            <i class="mdi mdi-chart-areaspline card_header font-size"></i>
            <h4 class="card-title">Month Wise Weight</h4>
          </div>
         

          <div class="row">
            <div class="col-12">
              {/* <div class="sales-bars-chart" style={{height: '175px',width:'auto'}}> </div> */}
              <ReactApexChart options={options} series={series} type="line" height={357} />
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
