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
<li><Link href="/usa-pittsburgh/amtran">AMTRAN</Link></li>
<li><Link href="/usa-pittsburgh/area_transportation">AREA_TRANSPORTATION</Link></li>
<li><Link href="/usa-pittsburgh/bcta">BCTA</Link></li>
<li><Link href="/usa-pittsburgh/butler_transit">BUTLER_TRANSIT</Link></li>
<li><Link href="/usa-pittsburgh/camtran">CAMTRAN</Link></li>
<li><Link href="/usa-pittsburgh/freedom_transit">FREEDOM_TRANSIT</Link></li>
<li><Link href="/usa-pittsburgh/fullington_trailways">FULLINGTON_TRAILWAYS</Link></li>
<li><Link href="/usa-pittsburgh/indiana_county">INDIANA_COUNTY</Link></li>
<li><Link href="/usa-pittsburgh/mid_mon_valley">MID_MON_VALLEY</Link></li>
<li><Link href="/usa-pittsburgh/mountain_line">MOUNTAIN_LINE</Link></li>


<li><Link href="/usa-pittsburgh/regional_transit_funicural">REGIONAL_TRANSIT_FUNICURAL</Link></li>
<li><Link href="/usa-pittsburgh/regional_transit_rail">REGIONAL_TRANSIT_RAIL</Link></li>
</ul>

<h1>Train Services</h1>
<ul className = "no-bullets">
<li><Link href="/usa-pittsburgh/amtrak">Amtrak</Link></li>
</ul>
<h1>Light Rail Agencies</h1>
<ul className = "no-bullets">
<li><Link href="/usa-pittsburgh/regional_transit">Pittsburg Regional Transit</Link></li>
</ul>
<h1>Funicular Agencies</h1>
<ul className = "no-bullets">

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
