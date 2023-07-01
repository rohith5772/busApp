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


const Albany = () => {
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
  <li><Link href="/usa/atlanta/bus-service/marta">MARTA</Link></li>
  <li><Link href="/usa/atlanta/bus-service/grta">GRTA</Link></li>
  <li><Link href="/usa/atlanta/bus-service/atlantic_station">Atlantic Station</Link></li>
  <li><Link href="/usa/atlanta/bus-service/cobblinc">CobbLinc</Link></li>
  <li><Link href="/usa/atlanta/bus-service/gc_transit">GC Transit</Link></li>
  <li><Link href="/usa/atlanta/bus-service/connect_douglas">Connect Douglas</Link></li>
  <li><Link href="/usa/atlanta/bus-service/cats">CATS</Link></li>
  <li><Link href="/usa/atlanta/bus-service/stringer">Stinger</Link></li>
  <li><Link href="/usa/atlanta/bus-service/emory_shuttle">Emory Shuttle</Link></li>
  <li><Link href="/usa/atlanta/bus-service/panther_express">Panther Express</Link></li>
  <li><Link href="/usa/atlanta/bus-service/woodruff_library">Woodruff (AUC) Library Shuttle</Link></li>
  <li><Link href="/usa/atlanta/bus-service/rtd">RTD</Link></li>
  <li><Link href="/usa/atlanta/bus-service/groome_transportation">Groome Transportation</Link></li>

</ul>

<h1>Train Services</h1>
<ul className = "no-bullets">
  <li><Link href="/usa/atlanta/train-service/amtrak">Amtrak</Link></li>

</ul>
<h1>Subway Services</h1>
<ul className = "no-bullets">
  <li><Link href="/usa/atlanta/train-service/marta">MARTA</Link></li>

</ul>
<h1>Light Rail Services</h1>
<ul className = "no-bullets">
  <li><Link href="/usa/atlanta/train-service/street_car">Atlanta Streetcar</Link></li>

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

export default Albany;
