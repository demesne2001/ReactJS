import React, { useEffect } from 'react'
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
import GetAndSetContext from '../context/GetAndSetContext'

export default function StockToSales() {
    useEffect(() => {
        localStorage.setItem('token', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySUQiOiJvbUBnbWFpbC5jb20iLCJleHBpcnkiOjE3MDk2NDczNzQuNzUwMjY2fQ.LQN429fBmq8g4tLrc8Yn_oCqJ9GtKnVMmcOPie0q8k0')
    }, [])

    return (

        <div class="page-wrapper" id="myDIV1">
            <GetAndSetContext>
                <Header />
                <div class="container-fluid ">
                    <div class="row">
                        <div class="col-xl-12 col-lg-7 col-md-12 col-sm-12 ">

                            <div class="row">

                                <MonthWiseWeight />
                                <ProductWiseWeight />

                            </div>
                            <div class="row">
                                <ItemWiseWeight />
                                <BranchWiseWeight />

                            </div>
                            <div class="row">
                                <SubItemWiseWeight />
                            </div>
                        </div>
                    </div>
                </div>
            </GetAndSetContext>
        </div>

    )



}

function Comman() {
    return (
        <dix></dix>
    );
}

