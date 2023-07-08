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


const Nagpur = () => {
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
      <title>All Schedule Timing TimeTable of Nagpur City Bus</title><meta name = "keyword" content="find bus schedule,City bus timetable, Nagpur City Bus,,bus schedule,"/>
      <meta name = "keyword" content="bus timings Nagpur city,Nagpur bus route,find bus schedule,Nagpur City route map, bus timetable pdf,city bus routes,bus routes list Nagpur,Nagpur City Bus"/>
          <meta name="description" content="Find Nagpur City Bus Routes Schedule Timings TimeTable and info.Get bus Route pdf"/>
              <h1 className="h1class"><a href="" title="Nagpur Bus Routes " target="_self">Nagpur City Bus Routes</a></h1>

        <div id="map"></div>
        <div className="topnav" id="myTopnav">
        <Link id = "home" href="/india/Nagpur/home" className="commonclass">home</Link>
        <Link id = "bustimings" className="commonclass" href="/india/Nagpur/bustimings" >Search Bus</Link>
        <Link id = "allbuses" className="commonclass" href="/india/Nagpur/allbuses">All Buses</Link>
        <Link id = "contact" className="commonclass" href="/india/Nagpur/contact">Contact</Link>
        <Link id = "about" className="commonclass" href="/india/Nagpur/about">About</Link>
        <Link id = "metrotimings" className="commonclass" href="/india/Nagpur/metrotimings">Metro Timings</Link>


</div>
<main>
<div  className="flex-wrapper">

<div className="container">
<div className="row">
<h1>Bus Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india-nagpur/metro_feeder_bus">Nagpur Metro Feeder Bus</Link></li>
  <li><Link href="/india-nagpur/aapli_bus_nagpur">Aapli Bus Nagpur</Link></li>
  <li><Link href="/india-nagpur/msrtc">Msrtc (Maharashtra State Road Transport Corporation)</Link></li>
</ul>

<h1>Metro Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india-nagpur/metro">Nagpur Metro</Link></li>
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

export default Nagpur;
