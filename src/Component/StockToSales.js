import React ,{useEffect} from 'react'
import MonthWiseWeight from './MonthWiseWeight'
import BranchWiseWeight from './BranchWiseWeight'
import ProductWiseWeight from './ProductWiseWeight'
import ItemWiseWeight from './ItemWiseWeight'
import SubItemWiseWeight from './SubItemWiseWeight'
import './css/style.css';
import './css/spinners.css';
import './css/animate.css';
import './assets/plugins/bootstrap/css/bootstrap.min.css'
import Header from './Header'
export default function StockToSales() {

    useEffect(()=>{
        localStorage.setItem('token','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySUQiOiJvbUBnbWFpbC5jb20iLCJleHBpcnkiOjE3MDk1NDQ5NTAuNjgwOTA0Mn0.bNERNC7sCaDp-d9PjEyUzNWEoJvmf7eqGQOHW41N6sw')
      },[])

  return (
    <div class="page-wrapper" id="myDIV1">
            <Header/>
        <div class="container-fluid ">
            <div class="row">
                <div class="col-xl-12 col-lg-7 col-md-12 col-sm-12 ">
                    <div class="row">
                        <MonthWiseWeight />
                        <ProductWiseWeight/>
                        <BranchWiseWeight/>
                    </div>
                    <div class="row">
                        <ItemWiseWeight/>
                        <SubItemWiseWeight/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
