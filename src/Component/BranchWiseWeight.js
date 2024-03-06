import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import ReactApexChart from 'react-apexcharts'
import { json } from 'react-router-dom'
import Creatcontext from '../context/Creatcontext'
import APIConfig from '../APIConfig'
import post from '../ServiceFile'

export default function BranchWiseWeight() {
  const [series, setseries] = useState([])
  const [options, setoptions] = useState({})
  const FilterContext = useContext(Creatcontext);
  const [APIInput, setAPIInput] = useState(FilterContext.CommanFilter)
  const{}=APIConfig
  let input1 = APIInput


  let defaultRes = {}
  useEffect(() => {
    setAPIInput(FilterContext.CommanFilter)
    console.log('Branch1')
    input1['PrintGroupBy'] = "BranchName,br.BranchID"
  }, [FilterContext.CommanFilter])

  useEffect(() => {
    console.log('Branch2')
    input1['PrintGroupBy'] = "BranchName,br.BranchID"
    BranchWiseWeightAPI()

  }, [APIInput])

  let tempSalesArr = []
  let tempTotalArr = []
  let tempSeriesArr = []
  let BranchArr = []
  function BranchWiseWeightAPI() {
    post(input1, APIConfig.GetStockToSalesAPI, defaultRes, 'post').then((res) => {
      
      for (let i = 0; i < res.data.lstResult.length; i++) {
        tempSalesArr.push(res.data.lstResult[i].sales)
        tempTotalArr.push(res.data.lstResult[i].Total)
        BranchArr.push(res.data.lstResult[i].BranchName)
      }
      setseries(tempSeriesArr)
      setoptions(optionsdata)
      input1 = APIInput
    })

  }

  let optionsdata = {
    chart: {
      height: 350,
      width: 500,
      type: 'line',
    },
    stroke: {
      width: [0, 4]
    },
    title: {
      // text: 'Branch Wise'
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1]
    },
    labels: BranchArr,
    xaxis: {
      type: 'datetime'
    },
    yaxis: [{
      // title: {
      //   text: 'Website Blog',
      // },

    }, {
      opposite: true,
      // title: {
      //   text: 'Social Media'
      // }
    }]
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
            <h4 class="card-title">Branch Wise Weight</h4>
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
