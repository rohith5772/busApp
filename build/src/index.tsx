import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage'
import ListingPage from './components/ListingPage/listingpage'
import DetailingPage from './components/DetailingPage'
import DallE from './components/DallE'
import Image from "./components/Image/image"
import DallEImageVariation from "./components/DallEImageVariation/index";
import DallEImageEdit from './components/DallEImageEdit/index';
import DetailingTimingsPage from './components/DetailingTimingsPage';
import BusTimings from './components/BusTimings';
import BusIdRouteFromTo from './components/BusIdRouteFromTo';

ReactDOM.render(
  <React.StrictMode>
    
    <HashRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ListingPage />} path="listing" />
        <Route element={<DetailingPage />} path="details" />
        <Route element={<DallE />} path="DallE" />
        <Route element={<Image/>} path="image" />
        <Route element={<DallEImageVariation/>} path="DallEImageVariation" />
        <Route element={<DallEImageEdit/>} path="DallEImageEdit" />
        <Route element={<DetailingTimingsPage/>} path="DetailingTimingsPage" />
        <Route element={<BusTimings/>} path="BusTimings" />
        <Route element={<BusIdRouteFromTo/>} path="BusIdRouteFromTo" />

        
      </Routes>

    </HashRouter>


  </React.StrictMode>,
  document.getElementById('root')
);