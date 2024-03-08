import React, { useState, useContext, useEffect } from 'react'
import user from './assets/images/users/1.jpg'
import Modal from 'react-bootstrap/Modal';
import './css/style.css';
import './css/spinners.css';
import './css/animate.css';
import './assets/plugins/bootstrap/css/bootstrap.min.css'
import Creatcontext from '../context/Creatcontext'
import APIConfig from '../APIConfig'

import { Link } from 'react-router-dom';
import axios from 'axios';



export default function Header() {
    const input = {
        "FromDate": "",
        "ToDate": "",
        "TotalRow": "",
        "strCompanyID": "",
        "strBranchID": "",
        "strItemGroupID": "",
        "strItemID": "",
        "Unit": "KG"
    }
    const [show, setShow] = useState(false);
    const [FilteComman, setFilteComman] = useState(input);
    const [FilteComman2, setFilteComman2] = useState(input);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const FilterContext = useContext(Creatcontext);
    useEffect(() => {
        console.log('before', FilteComman)
        setFilteComman(FilterContext.CommanFilter)

    }, [FilterContext])
    function OnRestEffect() {
        var applyFiltercomman = { ...FilteComman }
        var applyFiltercomman2 = { ...FilteComman2 }
        delete applyFiltercomman['PrintGroupBy']
        delete applyFiltercomman2['PrintGroupBy']

        console.log('FilteComman', FilteComman)
        console.log('FilteComman2', FilteComman2)

        if (JSON.stringify(input) === JSON.stringify(applyFiltercomman)) {
            setFilteComman(input)
            handleClose()
        }
        else {
            setFilteComman(input)
            setFilteComman2(input)
            FilterContext.updatefilte(input)
            handleClose()
        }
    }
    function HandleValueChnage(e) {
        console.log('inputchange', input)
        setFilteComman({ ...FilteComman, [e.target.name]: e.target.value })
    }
    
    function OnApplyEffect() {

        var applyFiltercomman = { ...FilteComman }
        var applyFiltercomman2 = { ...FilteComman2 }
        delete applyFiltercomman['PrintGroupBy']
        delete applyFiltercomman2['PrintGroupBy']



        if (JSON.stringify(applyFiltercomman) === JSON.stringify(applyFiltercomman2)) {
            handleClose()
        }
        else {
            console.log('input1', applyFiltercomman)
            console.log('input2', applyFiltercomman2)

            setFilteComman2(FilteComman)

            FilterContext.updatefilte(FilteComman)
            handleClose()
        }

    }
    return (
        <div>
            <div class="topbar-alignment">
                <div class=" page-titles">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6  align-self-center">
                            <div class="page-title-alignment">
                                <img src={user} alt="user" class="profile-pic" />
                                <h3 class="text-themecolor header-title">CEO-DASHBOARD</h3>                                
                            </div>
                            <div class="page-title-alignment">
                            <Link to='/om'> Live Date</Link>                                
                            {/* <button class="" onClick={Validate}>Validate</button> */}
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 align-self-center">
                           
                            <div class="title-date">
                                <button
                                    class="right-side-toggle waves-effect waves-light btn-inverse btn btn-circle btn-sm pull-right m-l-10"
                                    onClick={handleShow}><i class="mdi mdi-filter-outline"></i></button>
                               
                                <h6 class="headalign"> <input type="date" class="date1" /></h6>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header >
                                        <div class="rpanel-title"> <i class="mdi mdi-filter-outline filter "></i> FILTER <span><i
                                            class="ti-close right-side-toggle" style={{ alignSelf: "left" }} onClick={handleClose}></i></span> </div>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div>
                                            <label for="fromdate">Fromdate : </label>
                                            <input type="date" name="FromDate" value={FilteComman.FromDate} onChange={HandleValueChnage} />
                                            <label for="ToDate">Todate : </label>
                                            <input type="date" name="ToDate" value={FilteComman.ToDate} onChange={HandleValueChnage} />
                                        </div>
                                        <div>
                                            <div class="titlealign">
                                                <h4>--NAME--</h4>
                                            </div>
                                            <label>Company Name : </label>
                                            <select class="custom-select my-1 mr-sm-2" name="strCompanyID" value={FilteComman.strCompanyID} onChange={HandleValueChnage}>
                                                <option value="" selected>All</option>
                                                <option value="1">Alpha ltd.</option>
                                                <option value="2">Alpha pvt. ltd.</option>
                                            </select>
                                            <label>Branch Name : </label>
                                            <select class="custom-select my-1 mr-sm-2" name="strBranchID" value={FilteComman.strBranchID} onChange={HandleValueChnage}>
                                                <option value="" selected>All</option>
                                                <option value="1" >Thaltej</option>
                                                <option value="3">Prahlad Nagar</option>
                                            </select>
                                            <div class="titlealign">
                                                <h4>--CURRENCY--</h4>
                                            </div>
                                            <label>Unit Range : </label>
                                            <select class="custom-select my-1 mr-sm-2" name="Unit" value={FilteComman.Unit} onChange={HandleValueChnage}>
                                                <option value="KG" selected>KG</option>
                                                <option value="Gram">Gram</option>
                                            </select>
                                            <div class="titlealign">
                                                <h4>--TOP NODES--</h4>
                                            </div>
                                            <label>TopN:</label>
                                            <select class="custom-select my-1 mr-sm-2" name="TotalRow" value={FilteComman.TotalRow} onChange={HandleValueChnage}>
                                                <option value="" selected>2</option>
                                                <option value="5" >5</option>
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                            </select>
                                            <label>Item:</label>
                                            <select class="custom-select my-1 mr-sm-2" name="strItemID" value={FilteComman.strItemID} onChange={HandleValueChnage}>
                                                <option value="" selected>2</option>
                                                <option value="1" >5</option>
                                                <option value="121">10</option>
                                                <option value="25">25</option>
                                            </select>
                                            <div class="buttonalign">
                                                <button type="button"
                                                    class="btn waves-effect waves-light btn-outline-secondary " onClick={OnApplyEffect}>Apply</button>
                                                <button type="button"
                                                    class="btn waves-effect waves-light btn-outline-secondary " onClick={OnRestEffect}>Reset</button>
                                            </div>

                                        </div>

                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
