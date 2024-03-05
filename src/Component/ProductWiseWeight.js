import axios from 'axios'
import React,{useEffect, useState,useContext} from 'react'
import ReactApexChart from 'react-apexcharts'
import Creatcontext from '../context/Creatcontext'
import APIConfig from'../APIConfig'
// const seriess= [{
//   data: [{
//     x: 'Team A',
//     y: [5]
//   }, {
//     x: 'Team B',
//     y: [ 6]
//   }, {
//     x: 'Team C',
//     y: [ 8]
//   }, {
//     x: 'Team D',
//     y: [ 11]
//   }]
// }, {
//   data: [{
//     x: 'Team A',
//     y: [ 6]
//   }, {
//     x: 'Team B',
//     y: [ 3]
//   }, {
//     x: 'Team C',
//     y: [ 8]
//   }, {
//     x: 'Team D',
//     y: [ 9]
//   }]
// }]
const optionsdata= {
  chart: {
    type: 'rangeBar',
    height: 350,

  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  dataLabels: {
    enabled: true
  }
}
export default function ProductWiseWeight() {
  const [lstSeries,setlstSeries] = useState([])
  const[ToDate,setToDate]=useState('')
  const[FromDate,setFromDate]=useState('')
  const[TotalRow,setTotalRow]=useState('')
  const[strCompanyID,setstrCompanyID]=useState('')
  const[strBranchID,setstrBranchID]=useState('')
  const[strItemGroupID,setstrItemGroupID]=useState('')
  const[strItemID,setstrItemID]=useState('')
  const[Unit,setUnit]=useState('')
  const[PrintGroupBy,setPrintGroupBy]=useState('ProductName,D.ProductID')
  const[lstResult,setlstResult]=useState([])
  const[series,setseries]=useState([])
  const[options,setoptions]=useState({})
  const FilterContext = useContext(Creatcontext);
  console.log('contextbranch',Creatcontext)
  let contextinput=FilterContext.CommanFilter

  useEffect(()=>{
    contextinput['PrintGroupBy']="ProductName,D.ProductID"
    BranchWiseWeightAPI()
  },[contextinput])
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
  let ProductArr = []
  let productwisesaleslst=[]
  let productwiseTotallst=[]
  function BranchWiseWeightAPI()
{
   axios.post(APIConfig.GetStockToSalesAPI,contextinput,{headers:header}).then((res)=>{
   
   console.log('Product',res.data)
    setlstResult(res.data.lstResult)



    for (let i = 0; i < res.data.lstResult.length; i++) {
      // tempSalesArr.push(res.data.lstResult[i].sales)
      // tempTotalArr.push(res.data.lstResult[i].Total)

      productwisesaleslst.push({
        x:res.data.lstResult[i].ProductName,
        y:res.data.lstResult[i].sales
      })
      productwiseTotallst.push({
        x:res.data.lstResult[i].ProductName,
        y:res.data.lstResult[i].Total
      })
      ProductArr.push(res.data.lstResult[i].ProductName)
    }
    console.log('Total',productwiseTotallst)
    console.log('sales',productwisesaleslst)
    tempSeriesArr.push({data:productwiseTotallst})
    tempSeriesArr.push({data:productwisesaleslst})
    console.log('data',tempSeriesArr)
    setseries(tempSeriesArr)
    setoptions(optionsdata)
  
  }).catch()

  

}
   
  return (
    <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
   
    <div class="card monthlyattendance">
        <div class="card-body stockaging">
            <div class="d-flex flex-wrap">
                <i class="mdi mdi-chart-areaspline card_header font-size"></i>
                <h4 class="card-title">Product Wise Weight</h4>
            </div>
           
          
            <div class="row">
                <div class="col-12">
                    {/* <div class="sales-bars-chart" style={{height: '175px',width:'auto'}}> </div> */}
                    <ReactApexChart options={optionsdata} series={series} type="bar" height={350} />
                </div>
            </div>

            
            
        </div>
    </div>
   
</div>
  )
}
