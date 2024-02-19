import React from 'react'
import Header from './Header'
import Comp from './comp'
import Comp2 from './comp2'
import Comp3 from './comp3'
import Comp4 from './comp4'
import Comp5 from './comp5'
import Comp6 from './comp6'
import Comp7 from './comp7' 
import Comp8 from './comp8'
import Comp9 from './comp9'
import Comp10 from './comp10'
import Comp11 from './comp11'
import Comp12 from './comp12'
import Comp13 from './comp13'
import Comp14 from './comp14'
import Comp15 from './comp15'
import './css/style.css';
import './css/spinners.css';
import './css/animate.css';
import './assets/plugins/bootstrap/css/bootstrap.min.css'


export default function Dashboard() {
  return (
    
    <div class="page-wrapper" id="myDIV1">
            <Header/>
        
    <div class="container-fluid ">
        <div class="row">
            <div class="col-xl-3 col-lg-5 col-md-12 col-sm-12">
                <div class="row">
                    <Comp/>
                    <Comp2/>
                    <Comp3/>
                    <Comp4/>
                    <Comp5/>
                    <Comp6/>
                    <Comp7/>
                </div>
            </div>
            <div class="col-xl-9 col-lg-7 col-md-12 col-sm-12 ">
                <div class="row">
                    <Comp8/>
                    <Comp9/>
                    <Comp10/>
                </div>
                <div class="row">
                    <Comp11/>
                    <Comp12/>
                </div>
                <div class="row">
                    <Comp13/>
                    <Comp14/>
                    <Comp15/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
