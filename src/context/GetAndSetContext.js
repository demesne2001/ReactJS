import React, {  useState } from 'react'
import Creatcontext from './Creatcontext'


export default function GetAndSetContext(props) {
    const commanFilterDefault = {
        FromDate: "",
        ToDate: "",
        TotalRow: "",
        strCompanyID: "",
        strBranchID: "",
        strItemGroupID: "",
        strItemID: "",
        Unit: "KG",
    } 

    const[CommanFilter,SetCommanFilter]=useState(commanFilterDefault);

    const updatefilte = (obj) => {
        SetCommanFilter(obj)
   }
  return (
    <Creatcontext.Provider value = {{CommanFilter,updatefilte}}>
        {props.children}
    </Creatcontext.Provider>
  )
}
