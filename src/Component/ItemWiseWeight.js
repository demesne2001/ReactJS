import axios from 'axios'
import React,{useEffect, useState} from 'react'
import ReactApexChart from 'react-apexcharts'
const series=[{
  name: 'Total',
  type: 'column',
  data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
}, {
  name: 'Cashflow',
  type: 'column',
  data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
}]
const optionsdata=  
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
    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
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
export default function ItemWiseWeight() {
  const [lstSeries,setlstSeries] = useState([])
  const[ToDate,setToDate]=useState('')
  const[FromDate,setFromDate]=useState('')
  const[TotalRow,setTotalRow]=useState('5')
  const[strCompanyID,setstrCompanyID]=useState('')
  const[strBranchID,setstrBranchID]=useState('')
  const[strItemGroupID,setstrItemGroupID]=useState('')
  const[strItemID,setstrItemID]=useState('')
  const[Unit,setUnit]=useState('KG')
  const[PrintGroupBy,setPrintGroupBy]=useState('ItemName,a.ItemID')
  const[lstResult,setlstResult]=useState([])
  const[series,setseries]=useState([])
  const[options,setoptions]=useState({})
  const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySUQiOiJvbUBnbWFpbC5jb20iLCJleHBpcnkiOjE3MDkzODQ4NDIuNjgzMTcyN30.c4QyRhoBp3EG8Dkc9BUU6MV2n0c0-W8wjbT9xtauoDg"

  useEffect(()=>{
   
    ItemWiseWeightAPI()
  },[])
  let input={
    "FromDate": FromDate,
    "ToDate": ToDate,
    "TotalRow": TotalRow,
    "strCompanyID": strCompanyID,
    "strBranchID": strBranchID,
    "strItemGroupID": strItemGroupID,
    "strItemID": strItemID,
    "Unit": Unit,
    "PrintGroupBy": PrintGroupBy
  }
  let header={
    'Authorization': localStorage.getItem('token'),
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
  }
  let tempSalesArr = []
  let tempTotalArr = []
  let tempSeriesArr = []
  let ItemArr = []
  function ItemWiseWeightAPI()
{
   axios.post('http://127.0.0.1:8000/StockToSales/GetStockToSales',input,{headers:header}).then((res)=>{
   
   console.log('item',res.data)
    setlstResult(res.data.lstResult)



    for (let i = 0; i < res.data.lstResult.length; i++) {
      tempSalesArr.push(res.data.lstResult[i].sales)
      tempTotalArr.push(res.data.lstResult[i].Total)
      ItemArr.push(res.data.lstResult[i].ItemName)
    }
    
    setseries(tempSeriesArr)
    setoptions(optionsdata)
  
  }).catch()






  const optionsdata=  
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
  name:'Total',
  type: 'column',
  data:tempTotalArr   
})
tempSeriesArr.push({
  name:'Sales',
  type: 'column',
  data:tempSalesArr   
})

  return (
<div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
   
    <div class="card monthlyattendance">
        <div class="card-body stockaging">
            <div class="d-flex flex-wrap">
                <i class="mdi mdi-chart-areaspline card_header font-size"></i>
                <h4 class="card-title">Item Wise Weight</h4>
            </div>
            {/* <div class="text-center">
                <h4>Brand Name</h4>
            </div> */}
          
            <div class="row">
                <div class="col-12">
                    {/* <div class="sales-bars-chart" style={{height: '175px',width:'auto'}}> </div> */}
                    <ReactApexChart options={options} series={series} type="line" height={350} />
                </div>
            </div>

            
            
        </div>
    </div>
   
</div>
  )
}
