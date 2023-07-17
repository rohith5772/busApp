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
<li><Link href="/usa-denver/avon_transit">AVON_TRANSIT</Link></li>
<li><Link href="/usa-denver/breck_free_ride">BRECK_FREE_RIDE</Link></li>
<li><Link href="/usa-denver/buff_bus">BUFF_BUS</Link></li>
<li><Link href="/usa-denver/codot">CODOT</Link></li>
<li><Link href="/usa-denver/eco_transit">ECO_TRANSIT</Link></li>
<li><Link href="/usa-denver/epic_mountain_express">EPIC_MOUNTAIN_EXPRESS</Link></li>
<li><Link href="/usa-denver/groome_transportation">GROOME_TRANSPORTATION</Link></li>
<li><Link href="/usa-denver/gvt">GVT</Link></li>
<li><Link href="/usa-denver/home_james_transportation">HOME_JAMES_TRANSPORTATION</Link></li>
<li><Link href="/usa-denver/hop_bus">HOP_BUS</Link></li>
<li><Link href="/usa-denver/outrider">OUTRIDER</Link></li>
<li><Link href="/usa-denver/peak_1_express">PEAK_1_EXPRESS</Link></li>
<li><Link href="/usa-denver/rfta">RFTA</Link></li>
<li><Link href="/usa-denver/round_about">ROUND_ABOUT</Link></li>
<li><Link href="/usa-denver/rtd">RTD</Link></li>
<li><Link href="/usa-denver/snowmass_village_shuttle">SNOWMASS_VILLAGE_SHUTTLE</Link></li>
<li><Link href="/usa-denver/summit_stage">SUMMIT_STAGE</Link></li>
<li><Link href="/usa-denver/the_lift">THE_LIFT</Link></li>
<li><Link href="/usa-denver/vail_transit">VAIL_TRANSIT</Link></li>
</ul>
<h1>Train Services</h1>
<ul className = "no-bullets">
<li><Link href="/usa-denver/amtrak">AMTRAK</Link></li>
<li><Link href="/usa-denver/rtd_train">RTD_TRAIN</Link></li>
</ul>
<h1>Light Rail Agenies</h1>
<ul className = "no-bullets">
<li><Link href="/usa-denver/rtd_lightrail">RTD_LIGHTRAIL</Link></li>

</ul>
<h1>Gondala Agencies</h1>
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
