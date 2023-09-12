import React from "react";
import Navbar from './components/Navbar.jsx'
import Login from './scenes/auth/Login.jsx'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import SignUp from "./scenes/auth/SignUp.jsx";
import Homepage from "./scenes/homepage/Homepage.jsx";
import SideBar from "./components/SideBar.jsx";
import Dashboard from "./scenes/dashboard/Dashboard.jsx";
import ProductPage from "./scenes/product/ProductPage.jsx";
import Catagorypage from "./scenes/homepage/Catagorypage.jsx";
import Item from "./scenes/homepage/Item.jsx"
import Cartpage from "./scenes/homepage/Cartpage.jsx";
import Checkout from "./scenes/homepage/Checkout.jsx";

function App() {

  return (
    <div className="App bg-grey-bg w-full h-full ">
  <Navbar />
  <hr />
  <div className="flex">
  <SideBar/>
  <Routes>
  <Route path="/" element={<Homepage/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/signup" element={<SignUp/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="/product/:productId" element={<ProductPage/>}/>
  <Route path="/catagory" element={<Catagorypage />}/>
  <Route path="/search" element={<Item />}/>
  <Route path="/cart" element={<Cartpage />}/>
  <Route path="/checkout" element={<Checkout />}/>
</Routes>
</div>
    </div>
  );
}

export default App;
