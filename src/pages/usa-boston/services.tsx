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
<li><Link href="/usa-boston/128_the_gride">128_THE_GRIDE</Link></li>
<li><Link href="/usa-boston/bat">BAT</Link></li>
<li><Link href="/usa-boston/boston_express">BOSTON_EXPRESS</Link></li>
<li><Link href="/usa-boston/cata">CATA</Link></li>
<li><Link href="/usa-boston/cj">CJ</Link></li>
<li><Link href="/usa-boston/ez_ride">EZ_RIDE</Link></li>
<li><Link href="/usa-boston/franklin_regional">FRANKLIN_REGIONAL</Link></li>
<li><Link href="/usa-boston/gatra">GATRA</Link></li>
<li><Link href="/usa-boston/logan_express">LOGAN_EXPRESS</Link></li>
<li><Link href="/usa-boston/lrta">LRTA</Link></li>
<li><Link href="/usa-boston/mart">MART</Link></li>
<li><Link href="/usa-boston/massport">MASSPORT</Link></li>
<li><Link href="/usa-boston/mbta">MBTA</Link></li>
<li><Link href="/usa-boston/mrta">MRTA</Link></li>
<li><Link href="/usa-boston/mvrta">MVRTA</Link></li>
<li><Link href="/usa-boston/pb">PB</Link></li>
<li><Link href="/usa-boston/peter_pan1">PETER_PAN1</Link></li>
<li><Link href="/usa-boston/peter_pan2">PETER_PAN2</Link></li>
<li><Link href="/usa-boston/pvta">PVTA</Link></li>
<li><Link href="/usa-boston/ripta">RIPTA</Link></li>
<li><Link href="/usa-boston/srta">SRTA</Link></li>
<li><Link href="/usa-boston/the_wave">THE_WAVE</Link></li>
<li><Link href="/usa-boston/vta">VTA</Link></li>
<li><Link href="/usa-boston/wrta">WRTA</Link></li>
<li><Link href="/usa-boston/regional_transit_authority">REGIONAL_TRANSIT_AUTHORITY</Link></li>

</ul>

<h1>Train Agencies</h1>
<ul className = "no-bullets">
<li><Link href="/usa-boston/mbta_train">MBTA_TRAIN</Link></li>
<li><Link href="/usa-boston/cape_cod_rta">CAPE_COD_RTA</Link></li>
<li><Link href="/usa-boston/amtrak">AMTRAK</Link></li>
</ul>
<h1>Subway Services</h1>
<ul className = "no-bullets">
<li><Link href="/usa-boston/mbta_subway">MBTA_SUBWAY</Link></li>
</ul>
<h1>Ferry Agencies</h1>
<ul className = "no-bullets">
<li><Link href="/usa-boston/mbta_ferry">MBTA_FERRY</Link></li>
<li><Link href="/usa-boston/seaport_ferry">SEAPORT_FERRY</Link></li>
<li><Link href="/usa-boston/sea_streak">SEA_STREAK</Link></li>
<li><Link href="/usa-boston/cutty_hunk_ferry">CUTTY_HUNK_FERRY</Link></li>
<li><Link href="/usa-boston/freedom_cruise_line">FREEDOM_CRUISE_LINE</Link></li>
<li><Link href="/usa-boston/block_island_ferry">BLOCK_ISLAND_FERRY</Link></li>
<li><Link href="/usa-boston/boston_harbor_ferry">BOSTON_HARBOR_FERRY</Link></li>

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
