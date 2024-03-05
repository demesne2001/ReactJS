import axios from 'axios'
import React,{useEffect, useState,useContext} from 'react'
import ReactApexChart from 'react-apexcharts'
import APIConfig from'../APIConfig'
import Creatcontext from '../context/Creatcontext'

export default function SubItemWiseWeight() {

  const [lstSeries,setlstSeries] = useState([])
  const[ToDate,setToDate]=useState('')
  const[FromDate,setFromDate]=useState('')
  const[TotalRow,setTotalRow]=useState('')
  const[strCompanyID,setstrCompanyID]=useState('')
  const[strBranchID,setstrBranchID]=useState('')
  const[strItemGroupID,setstrItemGroupID]=useState('')
  const[strItemID,setstrItemID]=useState('')
  const[Unit,setUnit]=useState('')
  const[PrintGroupBy,setPrintGroupBy]=useState('SubItemName,SubItemID')
  const[lstResult,setlstResult]=useState([])
  const[series,setseries]=useState([])
  const[options,setoptions]=useState({})
  const FilterContext = useContext(Creatcontext);
  console.log('contextbranch',Creatcontext)
  let contextinput=FilterContext.CommanFilter

  useEffect(()=>{
    contextinput['PrintGroupBy']="SubItemName,SubItemID"
    console.log(contextinput)
    SubitenWiseWeightAPI()
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
  let SubItemArr = []
  let optionsdata= {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        distributed: true,
        barHeight: '80%',
        isFunnel: true,
      },
    },
    colors: [
      '#F44F5E',
      '#E55A89',
      '#D863B1',
      '#CA6CD8',
      '#B57BED',
      '#8D95EB',
      '#62ACEA',
      '#4BC3E6',
    ],
    dataLabels: {
      enabled: true,
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] 
      },
      dropShadow: {
        enabled: true,
      },
    },
    title: {
      // text: 'Pyramid Chart',
      align: 'middle',
    },
    xaxis: {
       categories: SubItemArr,
    },
    legend: {
      show: false,
    },
  }
  function SubitenWiseWeightAPI()
{
   axios.post(APIConfig.GetStockToSalesAPI,contextinput,{headers:header}).then((res)=>{
   console.log('REq',input)
   console.log('Subitem',res.data)
    setlstResult(res.data.lstResult)



    for (let i = 0; i < res.data.lstResult.length; i++) {
      tempSalesArr.push(res.data.lstResult[i].sales)
      tempTotalArr.push(res.data.lstResult[i].Total)
      SubItemArr.push(res.data.lstResult[i].SubItemName)
    }
   console.log(tempTotalArr.sort((a, b) => a - b))
    setseries(tempSeriesArr)
    setoptions(optionsdata)
  
  }).catch()


  tempSeriesArr.push({
    name:'',
    data:tempTotalArr.sort((a, b) => a - b)  ,
    // data:tempSalesArr.sort((a, b) => a - b)    
  })
  // tempSeriesArr.push({
  //   name:'',
  //   data:tempSalesArr   
  // })
  
  

}
  return (
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
   
    <div class="card monthlyattendance">
        <div class="card-body stockaging">
            <div class="d-flex flex-wrap">
                <i class="mdi mdi-chart-areaspline card_header font-size"></i>
                <h4 class="card-title">Sub-Item Wise Weight</h4>
            </div>
            
          
            <div class="row">
                <div class="col-12">
                    {/* <div class="sales-bars-chart" style={{height: '175px',width:'auto'}}> </div> */}
                    <ReactApexChart options={options} series={series} type="bar" height={350} />
                </div>
            </div>
        </div>
    </div>
   
</div>
  )
}
