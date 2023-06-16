import React, { useRef } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga';

import { useEffect,useState } from 'react'
//import './homePage.css';
import axios from "axios";
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
  
<h1>Bus Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india/hyderabad/bus-service/hyderabad_local_bus"><h3>Telangana State Road Transport Corporation (hyderabad local bus)</h3></Link></li>
  <li><Link href="/india/hyderabad/bus-service/hyderabad_local_electric_bus"><h3>TSRTC Pushpak (Airport Electric Buses)</h3></Link></li>
  <li><Link href="/india/hyderabad/bus-service/hyderabad_local_long_distance_bus"><h3>TSRTC hyderabad Long Distance Buses</h3></Link></li>
  <li><Link href="/india/hyderabad/bus-service/hyderabad_metro_feeder_bus"><h3>SVIDA (Metro Feeder Bus Services)</h3></Link></li>
  <li><Link href="/india/hyderabad/bus-service/hyderabad_local_ac_bus"><h3>TSRTC Vajra AC Bus Service</h3></Link></li>
</ul>
<h1>Train agencies</h1>
<ul className = "no-bullets">
  <li><Link href="/india/hyderabad/train-service/hyderabad_local_train"><h3>Hyderabad Multi-Modal Transport System</h3></Link></li>
</ul>
<h1>Metro Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india/hyderabad/train-service/metro"><h3>Metro</h3></Link></li>
</ul>

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