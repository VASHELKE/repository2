import './App.css';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import Counter from './components/Counter';
import NavBar from './components/NavBar';
import Login from './components/Login';
import CustomerDashboard from './components/CustomerDashboard';
import Logout from './components/Logout';
import Home from './components/Home';
import FetchAllWarehouse from './components/FetchAllWarehouse';
import FetchWarehouse from './components/FetchWarehouseById';
import EditWarehouse from './components/EditWarehouse';
import CreateWarehouse from './components/CreateWarehouse';
import Footer from './components/Footer';
import FetchWarehouseById from './components/FetchWarehouseById';
import FetchWarehouseByName from './components/FetchWarehouseById';
import FetchWarehouseByLocation from './components/FetchWarehouseById';
import GetAllWareHouses from './components/getAllWarehouses';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
 
  const myUser = localStorage.getItem("myUser");

  const updateNavBar = () => {
    setLoggedIn(true)
  }

  return (
    <div className="App">
      <Router>
         <NavBar updateNavBar={updateNavBar} /> 
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/customer/login" element={<Login />} />
          
          <Route path="/counter" element={<Counter />} />
          <Route path="/warehouse/all" element={<GetAllWareHouses />} />
          <Route path="/warehouse/findbyid/:id" element={<FetchWarehouseById />} />
          <Route path="/warehouse/findbyname/:name" element={<FetchWarehouseByName />} />
          <Route path="/warehouse/findbylocation/:location" element={<FetchWarehouseByLocation />} />
          <Route path="/warehouse/update" element={<EditWarehouse />} />
          <Route path="/warehouse/save" element={<CreateWarehouse />} />

      
          <Route path="/customer/logout" element={<Logout />} />
         
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;