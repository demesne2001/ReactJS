import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Header from './Component/Header';
import './Component/css/style.css';
import './Component/css/spinners.css';
import './Component/css/animate.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Component/assets/plugins/bootstrap/css/bootstrap.min.css'
import Dashboard from './Component/Dashboard';
import Comp8 from './Component/comp8';
import StockToSales from './Component/StockToSales';
import GetAndSetContext from './context/GetAndSetContext'
import ProductDetail from './Component/ProductDetail';

function App() {
  return (
    <div className="App">
       <GetAndSetContext>
    <Router>
      <Routes>
       
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Comp8' element={<Comp8/>}/>
        <Route path='/om' element={<StockToSales/>}/>
        <Route path='/Productdetail' element={<ProductDetail/>}/>
     
      </Routes>
      </Router>
      </GetAndSetContext>
    </div>
  );
}

export default App;
