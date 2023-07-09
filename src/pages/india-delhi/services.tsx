import React, { useRef } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga';

import { useEffect,useState } from 'react'
//import './homePage.css';

//import hydImg from './hyd-map.png';
import Select from "react-select";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
import Loader from '../../components/loader';
//map
//from,to text fields
//search button

//farecomparision button
//farecomparision page


const Delhi = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

    
  useEffect(() => {
    ReactGA.pageview(window.location.href);
    setLoading(true)
  }, [router])
  return (
    <div>
      {
        !loading ? <Loader/> : <></>  
      }
      <title>All Schedule Timing TimeTable of Delhi City Bus</title><meta name = "keyword" content="find bus schedule,City bus timetable, Delhi City Bus,,bus schedule,"/>
      <meta name = "keyword" content="bus timings Delhi city,Delhi bus route,find bus schedule,Delhi City route map, bus timetable pdf,city bus routes,bus routes list Delhi,Delhi City Bus"/>
          <meta name="description" content="Find Delhi City Bus Routes Schedule Timings TimeTable and info.Get bus Route pdf"/>
              <h1 className="h1class"><a href="" title="Delhi Bus Routes " target="_self">Delhi City Bus Routes</a></h1>

        <div id="map"></div>
        <div className="topnav" id="myTopnav">
        <Link id = "home" href="/india/Delhi/home" className="commonclass">home</Link>
        <Link id = "bustimings" className="commonclass" href="/india/Delhi/bustimings" >Search Bus</Link>
        <Link id = "allbuses" className="commonclass" href="/india/Delhi/allbuses">All Buses</Link>
        <Link id = "contact" className="commonclass" href="/india/Delhi/contact">Contact</Link>
        <Link id = "about" className="commonclass" href="/india/Delhi/about">About</Link>
        <Link id = "metrotimings" className="commonclass" href="/india/Delhi/metrotimings">Metro Timings</Link>


</div>
<main>
<div  className="flex-wrapper">

<div className="container">
<div className="row">
<h1>Bus Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india-delhi/dtc">DTC</Link></li>
  <li><Link href="/india-delhi/dmrc_feeder_bus">DMRC Feeder Bus</Link></li>
  <li><Link href="/india-delhi/dtc_ac_bus">DTC AC Bus</Link></li>
  <li><Link href="/india-delhi/dtc_express_bus">DTC Express Bus</Link></li>
  <li><Link href="/india-delhi/dtc_night_bus">DTC Night Bus</Link></li>
  <li><Link href="/india-delhi/dimts_1">DIMTS</Link></li>
  <li><Link href="/india-delhi/dimts_2">DIMTS</Link></li>
  <li><Link href="/india-delhi/ac_bus">AC bus lines</Link></li>
  <li><Link href="/india-delhi/airport_ac_bus">Airport AC bus lines</Link></li>
  <li><Link href="/india-delhi/gmcbl">GMCBL</Link></li>
  <li><Link href="/india-delhi/upsrtc_1">UPSRTC</Link></li>
  <li><Link href="/india-delhi/hartrans">Hartrans</Link></li>
  <li><Link href="/india-delhi/upsrtc_2">UPSRTC</Link></li>
</ul>
<h1>Train Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india-delhi/delhi_suburban">Delhi Suburban Trains</Link></li>
</ul>
<h1>Metro Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india-delhi/dmrc_1">DMRC</Link></li>
  <li><Link href="/india-delhi/dmrc_2">DMRC</Link></li>
  <li><Link href="/india-delhi/metro">Noida Metro</Link></li>

</ul>
</div>
</div >
  <footer>
    <p>&copy; 2023 Cityroutemapper</p>
  </footer>
  </div>
  </main>

    </div>
  );
};

export default Delhi;
