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
import Loader from '../../components/loader';
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
      <title>All Schedule Timing TimeTable of Hyderabad City Bus</title><meta name = "keyword" content="find bus schedule,City bus timetable, Hyderabad City Bus,bus schedule,"/>
      <meta name = "keyword" content="bus timings Hyderabad city,Hyderabad bus route,find bus schedule,Hyderabad City route map, bus timetable pdf,city bus routes,bus routes list Hyderabad,Hyderabad City Bus"/>
          <meta name="description" content="Find Hyderabad City Bus Routes Schedule Timings TimeTable and info.Get bus Route pdf"/>
              <h1 className="h1class"><a href="" title="Hyderabad Bus Routes " target="_self">Hyderabad City Routes</a></h1>

        <div id="map"></div>
        <div className="topnav" id="myTopnav">
        <Link id = "home" href="/india/Hyderabad/home" className="commonclass">home</Link>
        <Link id = "bustimings" className="commonclass" href="/india/Hyderabad/bustimings" >Search Bus</Link>
        <Link id = "allbuses" className="commonclass" href="/india/Hyderabad/allbuses">All Buses</Link>
        <Link id = "contact" className="commonclass" href="/india/Hyderabad/contact">Contact</Link>
        <Link id = "about" className="commonclass" href="/india/Hyderabad/about">About</Link>
        <Link id = "metrotimings" className="commonclass" href="/india/Hyderabad/metrotimings">Metro Timings</Link>


</div>
<main>
<div  className="flex-wrapper">

<div className="container">
<div className="row">
<h1>Bus Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india-hyderabad/hyderabad_local_bus">Telangana State Road Transport Corporation (hyderabad local bus)</Link></li>
  <li><Link href="/india-hyderabad/hyderabad_local_electric_bus">TSRTC Pushpak (Airport Electric Buses)</Link></li>
  <li><Link href="/india-hyderabad/hyderabad_local_long_distance_bus">TSRTC hyderabad Long Distance Buses</Link></li>
  <li><Link href="/india-hyderabad/hyderabad_metro_feeder_bus">SVIDA (Metro Feeder Bus Services)</Link></li>
  <li><Link href="/india-hyderabad/hyderabad_local_ac_bus">TSRTC Vajra AC Bus Service</Link></li>
</ul>
<h1>Train agencies</h1>
<ul className = "no-bullets">
  <li><Link href="/india-hyderabad/hyderabad_local_train">Hyderabad Multi-Modal Transport System</Link></li>
</ul>
<h1>Metro Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india-hyderabad/metro">Metro</Link></li>
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
