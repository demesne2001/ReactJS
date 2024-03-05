import React from 'react'


const Baseurl="http://127.0.0.1:8000/"
export default function APIConfig() {
  const LoginAPI  =Baseurl+"login"
  const RegisterAPI =Baseurl+"register"
  const GetStockToSalesAPI=Baseurl+"/StockToSales/GetStockToSales"
  const DepartmentListAPI =Baseurl
}
