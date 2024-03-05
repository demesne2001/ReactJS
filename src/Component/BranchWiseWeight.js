import axios from 'axios'
import React,{useEffect, useState} from 'react'
import ReactApexChart from 'react-apexcharts'
import { json } from 'react-router-dom'





export default function BranchWiseWeight() {
  const [lstSeries,setlstSeries] = useState([])
  const[ToDate,setToDate]=useState('')
  const[FromDate,setFromDate]=useState('')
  const[TotalRow,setTotalRow]=useState('6')
  const[strCompanyID,setstrCompanyID]=useState('')
  const[strBranchID,setstrBranchID]=useState('')
  const[strItemGroupID,setstrItemGroupID]=useState('')
  const[strItemID,setstrItemID]=useState('')
  const[Unit,setUnit]=useState('KG')
  const[PrintGroupBy,setPrintGroupBy]=useState('BranchName,br.BranchID')
  const[lstResult,setlstResult]=useState([])
  const[series,setseries]=useState([])
  const[options,setoptions]=useState({})
  const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySUQiOiJvbUBnbWFpbC5jb20iLCJleHBpcnkiOjE3MDkzODQ4NDIuNjgzMTcyN30.c4QyRhoBp3EG8Dkc9BUU6MV2n0c0-W8wjbT9xtauoDg"

  useEffect(()=>{
   
    BranchWiseWeightAPI()
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
    'Authorization':localStorage.getItem('token'),
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
  }
  let tempSalesArr = []
  let tempTotalArr = []
  let tempSeriesArr = []
  let BranchArr = []
  function BranchWiseWeightAPI()
{
   axios.post('http://127.0.0.1:8000/StockToSales/GetStockToSales',input,{headers:header}).then((res)=>{
   
    
    setlstResult(res.data.lstResult)



    for (let i = 0; i < res.data.lstResult.length; i++) {
      tempSalesArr.push(res.data.lstResult[i].sales)
      tempTotalArr.push(res.data.lstResult[i].Total)
      BranchArr.push(res.data.lstResult[i].BranchName)
    }
    
    setseries(tempSeriesArr)
    setoptions(optionsdata)
  
  }).catch()

  

}
 
let optionsdata= {
  chart: {
    height: 350,
    width:500,
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
  name:'Total',
  type: 'column',
  data:tempTotalArr   
})
tempSeriesArr.push({
  name:'Sales',
  type: 'column',
  data:tempSalesArr   
})



  

  
 

  // setlstSeries(tempSeriesArr)

  



  // const  series= [{
  //   name: 'Website Blog',
  //   type: 'column',
  //   data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  // }, {
  //   name: 'Social Media',
  //   type: 'line',
  //   data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  // }]
  



  return (
    <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12">
   
    <div class="card monthlyattendance">
        <div class="card-body stockaging">
            <div class="d-flex flex-wrap">
                <i class="mdi mdi-chart-areaspline card_header font-size"></i>
                <h4 class="card-title">Branch Wise Weight</h4>
            </div>
            <div class="text-center">
                {/* <h4>Brand Name</h4> */}
            </div>
          
            <div class="row">
                <div class="col-12">
                    {/* <div class="sales-bars-chart" style={{height: '175px',width:'auto'}}> </div> */}
                    <ReactApexChart options={options} series={series} type="line" height={357}  />
                </div>
            </div>

            
            {/* <ul class="list-inline m-t-20 text-center">
                <li>
                    <h6 class="text-muted"><i class="fa fa-circle text-info"></i> StockQty</h6>
                </li>
                <li>
                    <h6 class="text-muted"><i class="fa fa-circle text-danger"></i> SalesQty
                    </h6>
                </li>
            </ul> */}
        </div>
    </div>
   
</div>
  )
}
