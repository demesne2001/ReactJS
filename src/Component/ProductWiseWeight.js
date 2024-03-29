import axios from 'axios'
import React,{useEffect, useState,useContext} from 'react'
import ReactApexChart from 'react-apexcharts'
import Creatcontext from '../context/Creatcontext'
import APIConfig from'../APIConfig'
import post from '../ServiceFile'

import ProductDetail from './ProductDetail'
import { useNavigate } from 'react-router-dom'


export default function ProductWiseWeight() {
  const optionsdata= {
    chart: {
      type: 'rangeBar',
      height: 350,
      events: {
        dataPointSelection:function(event,chartContext,config)
        {
          EventCha()
        }
      }
  
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
  const navigate=useNavigate()
  function EventCha(){
    navigate('/')
  }

  const[series,setseries]=useState([])
  const FilterContext = useContext(Creatcontext);
  const [APIInput, setAPIInput] = useState(FilterContext.CommanFilter)
  const{}=APIConfig
  let input1 = APIInput
  let defaultRes={}

  useEffect(()=>{
    console.log('Product1')
    input1['PrintGroupBy']="ProductName,D.ProductID"
    setAPIInput(FilterContext.CommanFilter)   
  },[FilterContext.CommanFilter])

  useEffect(()=>{
    console.log('Product2')
    input1['PrintGroupBy']="ProductName,D.ProductID" 
    BranchWiseWeightAPI()
  },[APIInput])
 
  let tempSeriesArr = []
  let ProductArr = []
  let productwisesaleslst=[]
  let productwiseTotallst=[]
  function BranchWiseWeightAPI()
{
  post(input1, APIConfig.GetStockToSalesAPI, defaultRes, 'post').then((res) => {
    for (let i = 0; i < res.data.lstResult.length; i++) {
    
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
    
    
    tempSeriesArr.push({data:productwiseTotallst})
    tempSeriesArr.push({data:productwisesaleslst})
    
    setseries(tempSeriesArr)   
    input1=APIInput
  })

  

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
                    <ReactApexChart options={optionsdata} series={series} type="bar" height={357} />
                </div>
            </div>

            
            
        </div>
    </div>
   
</div>
  )
}
