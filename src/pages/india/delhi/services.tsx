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
import Loader from '../../../components/loader';
//map
//from,to text fields
//search button

//farecomparision button
//farecomparision page


const Hyderabad = () => {
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
      <title>All Schedule Timing TimeTable of hyderabad City Bus</title><meta name = "keyword" content="find bus schedule,City bus timetable, hyderabad City Bus,,bus schedule,"/>
      <meta name = "keyword" content="bus timings hyderabad city,hyderabad bus route,find bus schedule,hyderabad City route map, bus timetable pdf,city bus routes,bus routes list hyderabad,hyderabad City Bus"/>
          <meta name="description" content="Find hyderabad City Bus Routes Schedule Timings TimeTable and info.Get bus Route pdf"/>
              <h1 className="h1class"><a href="" title="hyderabad Bus Routes " target="_self">hyderabad City Bus Routes</a></h1>

        <div id="map"></div>
        <div className="topnav" id="myTopnav">
        <Link id = "home" href="/india/hyderabad/home" className="commonclass">home</Link>
        <Link id = "bustimings" className="commonclass" href="/india/hyderabad/bustimings" >Search Bus</Link>
        <Link id = "allbuses" className="commonclass" href="/india/hyderabad/allbuses">All Buses</Link>
        <Link id = "contact" className="commonclass" href="/india/hyderabad/contact">Contact</Link>
        <Link id = "about" className="commonclass" href="/india/hyderabad/about">About</Link>
        <Link id = "metrotimings" className="commonclass" href="/india/hyderabad/metrotimings">Metro Timings</Link>


</div>
<main>
<div  className="flex-wrapper">

<div className="container">
<div className="row">
<h1>Bus Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india/delhi/bus-service/dtc">DTC</Link></li>
  <li><Link href="/india/delhi/bus-service/dmrc_feeder_bus">DMRC Feeder Bus</Link></li>
  <li><Link href="/india/delhi/bus-service/dtc_ac_bus">DTC AC Bus</Link></li>
  <li><Link href="/india/delhi/bus-service/dtc_express_bus">DTC Express Bus</Link></li>
  <li><Link href="/india/delhi/bus-service/dtc_night_bus">DTC Night Bus</Link></li>
  <li><Link href="/india/delhi/bus-service/dimts_1">DIMTS</Link></li>
  <li><Link href="/india/delhi/bus-service/dimts_2">DIMTS</Link></li>
  <li><Link href="/india/delhi/bus-service/ac_bus">AC bus lines</Link></li>
  <li><Link href="/india/delhi/bus-service/airport_ac_bus">Airport AC bus lines</Link></li>
  <li><Link href="/india/delhi/bus-service/gmcbl">GMCBL</Link></li>
  <li><Link href="/india/delhi/bus-service/upsrtc_1">UPSRTC</Link></li>
  <li><Link href="/india/delhi/bus-service/hartrans">Hartrans</Link></li>
  <li><Link href="/india/delhi/bus-service/upsrtc_2">UPSRTC</Link></li>
</ul>
<h1>Train Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india/delhi/train-service/delhi_suburban">Delhi Suburban Trains</Link></li>
</ul>
<h1>Metro Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india/delhi/train-service/dmrc_1">DMRC</Link></li>
  <li><Link href="/india/delhi/train-service/dmrc_2">DMRC</Link></li>
  <li><Link href="/india/delhi/train-service/metro">Noida Metro</Link></li>

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

export default Hyderabad;
