import axios from 'axios'
import React,{useEffect, useState,useContext} from 'react'
import ReactApexChart from 'react-apexcharts'
import APIConfig from'../APIConfig'
import Creatcontext from '../context/Creatcontext'
import post from '../ServiceFile'
export default function SubItemWiseWeight() {
  const[series,setseries]=useState([])
  // const[strSubItemID,setstrSubItemID]=useState('')
  const[options,setoptions]=useState({})
  const FilterContext = useContext(Creatcontext);
  const [APIInput, setAPIInput] = useState(FilterContext.CommanFilter)
  const{}=APIConfig
  let input1 = APIInput
  let defaultRes={}

  useEffect(()=>{
    console.log('subitem1')
    input1['PrintGroupBy']="SubItemName,SubItemID"
    
    setAPIInput(FilterContext.CommanFilter)
  },[FilterContext.CommanFilter])
  useEffect(()=>{
    console.log('subitem2')
    input1['PrintGroupBy']="SubItemName,SubItemID"
    SubitenWiseWeightAPI()
  },[APIInput])
  // useEffect(()=>{
  //   if(strSubItemID !='')
  //   {
  //     FilterContext.updatefilte({...APIInput,["strItemID"]:strItemID.toString()})
  //   }
  // },[strSubItemID])

  
  let tempSalesArr = []
  let tempTotalArr = []
  let tempSeriesArr = []
  let SubItemArr = []
  let SubItemIDarr=[]
  let optionsdata= {
    chart: {
      type: 'bar',
      height: 350,
      // events: {
      //   dataPointSelection:function(event,chartContext,config)
      //   {            
      //     if(config.selectedDataPoints[0]===undefined)
      //     {
      //       sestrItemID(SubItemIDarr[ config.selectedDataPoints[1]])
      //     }
      //     else
      //     {              
      //       sestrItemID(SubItemIDarr[ config.selectedDataPoints[0]])             
      //     }   
      //   }
      // }
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
  post(input1, APIConfig.GetStockToSalesAPI, defaultRes, 'post').then((res) => {
    for (let i = 0; i < res.data.lstResult.length; i++) {
      tempSalesArr.push(res.data.lstResult[i].sales)
      tempTotalArr.push(res.data.lstResult[i].Total)
      SubItemArr.push(res.data.lstResult[i].SubItemName)
      SubItemIDarr.push(res.data.lstResult[i].SubItemID)
    }
   
    setseries(tempSeriesArr)
    setoptions(optionsdata)
  input1=APIInput
  })


  tempSeriesArr.push({
    name:'',
    data:tempTotalArr.sort((a, b) => a - b)  
    
  })
 
  
  

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
