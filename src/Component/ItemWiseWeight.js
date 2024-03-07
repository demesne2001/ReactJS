import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import ReactApexChart from 'react-apexcharts'
import Creatcontext from '../context/Creatcontext'
import APIConfig from '../APIConfig'
import post from '../ServiceFile'


export default function ItemWiseWeight() {
  const FilterContext = useContext(Creatcontext);
  const [series, setseries] = useState([])
  const [options, setoptions] = useState({})
  const [strItemID, sestrItemID] = useState('')
  const [APIInput, setAPIInput] = useState(FilterContext.CommanFilter)
  let input1 = APIInput
 


  useEffect(() => {
    console.log('item1')
    input1['PrintGroupBy'] = "ItemName,a.ItemID"
    setAPIInput(FilterContext.CommanFilter)

  }, [FilterContext.CommanFilter])

  useEffect(() => {
    console.log('item2')
    input1['PrintGroupBy'] = "ItemName,a.ItemID"
    ItemWiseWeightAPI()
  }, [APIInput])

  useEffect(() => {   
    if(strItemID !='')
    {
      FilterContext.updatefilte({...APIInput,["strItemID"]:strItemID.toString()})
    }
  }, [strItemID])

  let tempSalesArr = []
  let tempTotalArr = []
  let tempSeriesArr = []
  let ItemArr = []
  let ItemIDArr = []
  let defaultRes = {}
  function ItemWiseWeightAPI() {
    post(input1, APIConfig.GetStockToSalesAPI, defaultRes, 'post').then((res) => {

      for (let i = 0; i < res.data.lstResult.length; i++) {
        tempSalesArr.push(res.data.lstResult[i].sales)
        tempTotalArr.push(res.data.lstResult[i].Total)
        ItemArr.push(res.data.lstResult[i].ItemName)
        ItemIDArr.push(res.data.lstResult[i].ItemID)
      }

      setseries(tempSeriesArr)
      setoptions(optionsdata)
      input1 = APIInput

    })
    const optionsdata =
    {
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
        events: {
          dataPointSelection:function(event,chartContext,config)
          {            
            if(config.selectedDataPoints[0]===undefined)
            {
              sestrItemID(ItemIDArr[ config.selectedDataPoints[1]])
            }
            else
            {              
              sestrItemID(ItemIDArr[ config.selectedDataPoints[0]])             
            }   
          }
        }
        
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
      // labels:ItemArr,
      xaxis: {
        categories: ItemArr,
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
          // title: {
          //   text: "Income (thousand crores)",
          //   style: {
          //     color: '#008FFB',
          //   }
          // },
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
          // title: {
          //   text: "Operating Cashflow (thousand crores)",
          //   style: {
          //     color: '#00E396',
          //   }
          // },
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
            <h4 class="card-title">Item Wise Weight</h4>
          </div>
          <div class="row">
            <div class="col-12">
              <ReactApexChart options={options} series={series} type="line" height={357} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
