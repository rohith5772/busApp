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


const Ahmedabad = () => {
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
      <title>All Schedule Timing TimeTable of Ahmedabad City Bus</title><meta name = "keyword" content="find bus schedule,City bus timetable, Ahmedabad City Bus,,bus schedule,"/>
      <meta name = "keyword" content="bus timings Ahmedabad city,Ahmedabad bus route,find bus schedule,Ahmedabad City route map, bus timetable pdf,city bus routes,bus routes list Ahmedabad,Ahmedabad City Bus"/>
          <meta name="description" content="Find Ahmedabad City Bus Routes Schedule Timings TimeTable and info.Get bus Route pdf"/>
              <h1 className="h1class"><a href="" title="Ahmedabad Bus Routes " target="_self">Ahmedabad City Bus Routes</a></h1>

        <div id="map"></div>
        <div className="topnav" id="myTopnav">
        <Link id = "home" href="/india/Ahmedabad/home" className="commonclass">home</Link>
        <Link id = "bustimings" className="commonclass" href="/india/Ahmedabad/bustimings" >Search Bus</Link>
        <Link id = "allbuses" className="commonclass" href="/india/Ahmedabad/allbuses">All Buses</Link>
        <Link id = "contact" className="commonclass" href="/india/Ahmedabad/contact">Contact</Link>
        <Link id = "about" className="commonclass" href="/india/Ahmedabad/about">About</Link>
        <Link id = "metrotimings" className="commonclass" href="/india/Ahmedabad/metrotimings">Metro Timings</Link>


</div>
<main>
<div  className="flex-wrapper">

<div className="container">
<div className="row">
<h1>Bus Services</h1>
<ul className = "no-bullets">
<li><Link href="/usa-newjersey/academy">ACADEMY</Link></li>
<li><Link href="/usa-newjersey/bee">BEE</Link></li>
<li><Link href="/usa-newjersey/cttransit1">CTTRANSIT1</Link></li>
<li><Link href="/usa-newjersey/cttransit2">CTTRANSIT2</Link></li>
<li><Link href="/usa-newjersey/cttransit3">CTTRANSIT3</Link></li>
<li><Link href="/usa-newjersey/cttransit4">CTTRANSIT4</Link></li>
<li><Link href="/usa-newjersey/ct_transit">CT_TRANSIT</Link></li>
<li><Link href="/usa-newjersey/downtown_connection">DOWNTOWN_CONNECTION</Link></li>
<li><Link href="/usa-newjersey/dutchess_county">DUTCHESS_COUNTY</Link></li>
<li><Link href="/usa-newjersey/gbt">GBT</Link></li>
<li><Link href="/usa-newjersey/hampton_jitney">HAMPTON_JITNEY</Link></li>
<li><Link href="/usa-newjersey/hart">HART</Link></li>
<li><Link href="/usa-newjersey/hartransit">HARTRANSIT</Link></li>
<li><Link href="/usa-newjersey/hudson_link">HUDSON_LINK</Link></li>
<li><Link href="/usa-newjersey/lanta">LANTA</Link></li>
<li><Link href="/usa-newjersey/long_beach_bus">LONG_BEACH_BUS</Link></li>
<li><Link href="/usa-newjersey/mat">MAT</Link></li>
<li><Link href="/usa-newjersey/mta1">MTA1</Link></li>
<li><Link href="/usa-newjersey/mta2">MTA2</Link></li>
<li><Link href="/usa-newjersey/mta3">MTA3</Link></li>
<li><Link href="/usa-newjersey/nice">NICE</Link></li>

<li><Link href="/usa-newjersey/norwalk_transit">NORWALK_TRANSIT</Link></li>
<li><Link href="/usa-newjersey/nyc_ferry">NYC_FERRY</Link></li>
<li><Link href="/usa-newjersey/roic_red_bus">ROIC_RED_BUS</Link></li>
<li><Link href="/usa-newjersey/sct">SCT</Link></li>
<li><Link href="/usa-newjersey/seat">SEAT</Link></li>
<li><Link href="/usa-newjersey/sfcc">SFCC</Link></li>
<li><Link href="/usa-newjersey/tor">TOR</Link></li>
<li><Link href="/usa-newjersey/ucat">UCAT</Link></li>
<li><Link href="/usa-newjersey/uconn_shuttle">UCONN_SHUTTLE</Link></li>
<li><Link href="/usa-newjersey/wrtd">WRTD</Link></li>
<li><Link href="/usa-newjersey/amtrak">AMTRAK</Link></li>
<li><Link href="/usa-newjersey/c_trail">C_TRAIL</Link></li>


<li><Link href="/usa-newjersey/marc">MARC</Link></li>
<li><Link href="/usa-newjersey/metro">METRO</Link></li>

<li><Link href="/usa-newjersey/nj_transit_subway">NJ_TRANSIT_SUBWAY</Link></li>
<li><Link href="/usa-newjersey/nj_transit_train">NJ_TRANSIT_TRAIN</Link></li>





<li><Link href="/usa-newjersey/shore_line">SHORE_LINE</Link></li>



</ul>

<h1>Train Services</h1>
<ul className = "no-bullets">
<li><Link href="/usa-newjersey/lirr">LIRR</Link></li>
<li><Link href="/usa-newjersey/path">PATH</Link></li>
</ul>
<h1>Subway Agencies</h1>
<ul className = "no-bullets">
<li><Link href="/usa-newjersey/mta">MTA</Link></li>
<li><Link href="/usa-newjersey/sir">SIR</Link></li>
  
</ul>
<h1>Light Rail Agencies</h1>
<ul className = "no-bullets">
<li><Link href="/usa-newjersey/nj_transit">NJ Transit</Link></li>
<li><Link href="/usa-newjersey/jfk_airtrain">JFK Airtrain</Link></li>
  
</ul>
<h1>Ferry Agencies</h1>
<ul className = "no-bullets">
<li><Link href="/usa-newjersey/nyc_ferry">NYC Ferry</Link></li>
<li><Link href="/usa-newjersey/ny_waterway">NY Waterway</Link></li>
<li><Link href="/usa-newjersey/staten_island_ferry">Staten Island Ferry</Link></li>
<li><Link href="/usa-newjersey/statue_cruises">SCruises</Link></li>
<li><Link href="/usa-newjersey/seastreak">SeaStreak</Link></li>
<li><Link href="/usa-newjersey/statue_cruises">Statue cruises</Link></li>

</ul>
<h1>Cable Car Agencies</h1>
<ul className = "no-bullets">
<li><Link href="/usa-newjersey/roosevelt_island_tramway">Roosevelt Island Tranway</Link></li>


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

export default Ahmedabad;
