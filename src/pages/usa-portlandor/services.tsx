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
<li><Link href="/usa-portlandor/c">C</Link></li>
<li><Link href="/usa-portlandor/cat1">CAT1</Link></li>
<li><Link href="/usa-portlandor/cat2">CAT2</Link></li>
<li><Link href="/usa-portlandor/cc_rider">CC Rider</Link></li>
<li><Link href="/usa-portlandor/central_oregon">CENTRAL_OREGON</Link></li>
<li><Link href="/usa-portlandor/cherriots">CHERRIOTS</Link></li>
<li><Link href="/usa-portlandor/lincoln_county">LINCOLN_COUNTY</Link></li>
<li><Link href="/usa-portlandor/nw_connector">NW_CONNECTOR</Link></li>
<li><Link href="/usa-portlandor/point">POINT</Link></li>
<li><Link href="/usa-portlandor/sctd">SCTD</Link></li>
<li><Link href="/usa-portlandor/skamania_county">SKAMANIA_COUNTY</Link></li>
<li><Link href="/usa-portlandor/smart">SMART</Link></li>
<li><Link href="/usa-portlandor/swan_island_shuttle">Swan Island Shuttle</Link></li>
<li><Link href="/usa-portlandor/tctd">TCTD</Link></li>
<li><Link href="/usa-portlandor/the_link">THE_LINK</Link></li>
<li><Link href="/usa-portlandor/trimet">TRIMET</Link></li>
<li><Link href="/usa-portlandor/washington_park_shuttle">Washington Park Shuttle</Link></li>
<li><Link href="/usa-portlandor/woodburn_transit">WOODBURN_TRANSIT</Link></li>
<li><Link href="/usa-portlandor/yamhill_county">YAMHILL_COUNTY</Link></li>






</ul>

<h1>Train Services</h1>
<ul className = "no-bullets">
  <li><Link href="/usa-albany/amtrak">Amtrak</Link></li>
  <li><Link href="/usa-portlandor/wes">WES</Link></li>
</ul>
<h1>Light Rail Agencies</h1>
<ul className = "no-bullets">
  
<li><Link href="/usa-portlandor/trimet_rail">TriMet</Link></li>
 
</ul>
<h1>Street Car Agencies</h1>
<ul className = "no-bullets">
<li><Link href="/usa-portlandor/streetcar">Port land Streetcar</Link></li>
 
</ul>
<h1>Ferry Agencies</h1>
<ul className = "no-bullets">
<li><Link href="/usa-portlandor/canby_ferry">Canby Ferry</Link></li>
li><Link href="/usa-portlandor/wheatland_ferry">Wheatland Ferry</Link></li>
<li><Link href="/usa-portlandor/wahkiakum_ferry">Wahkiakum Ferry</Link></li>

 
</ul>
<h1>Gondala Agencies</h1>
<ul className = "no-bullets">
<li><Link href="/usa-portlandor/ohsu_tram">OHSU Tram</Link></li>
 
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
