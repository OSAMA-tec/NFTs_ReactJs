import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Create from "../pages/Create";
import EditProfile from "../pages/EditProfile";
import Market from "../pages/Market";
import NFTDetails from "../pages/NFTDetails";
import SellerProfile from "../pages/SellerProfile";
import Wallet from "../pages/Wallet";
import Login from "../components/loginsignup/Login"
import SignUp from "../components/loginsignup/SignUp"
const Routers = () => {
  return <Routes>
  <Route path='/' element={<Navigate to ='/home'/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/market' element={<Market/>}/>
  <Route path='/wallet' element={<Wallet/>}/>
  <Route path='/create' element={<Create/>}/>
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/sellerprofile' element={<SellerProfile/>}/>
  <Route path='/nftdetails' element={<NFTDetails/>}/>
  <Route path='/editprofile' element={<EditProfile/>}/>
  <Route path='/market/:id' element={<NFTDetails/>}/>

  </Routes>
};

export default Routers;
 