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
<li><Link href="/usa-buffalo/access_allegany">ACCESS_ALLEGANY</Link></li>
<li><Link href="/usa-buffalo/broome_county_transit">BROOME_COUNTY_TRANSIT</Link></li>
<li><Link href="/usa-buffalo/carts">CARTS</Link></li>
<li><Link href="/usa-buffalo/centro">CENTRO</Link></li>
<li><Link href="/usa-buffalo/coach_usa_erie">COACH_USA_ERIE</Link></li>
<li><Link href="/usa-buffalo/ctran">CTRAN</Link></li>
<li><Link href="/usa-buffalo/hornell_area_transit">HORNELL_AREA_TRANSIT</Link></li>
<li><Link href="/usa-buffalo/newyork_trailways">NEWYORK_TRAILWAYS</Link></li>
<li><Link href="/usa-buffalo/nfta">NFTA</Link></li>
<li><Link href="/usa-buffalo/olean_area_transit_system">OLEAN_AREA_TRANSIT_SYSTEM</Link></li>
<li><Link href="/usa-buffalo/otsego_express_public">OTSEGO_EXPRESS_PUBLIC</Link></li>
<li><Link href="/usa-buffalo/regional_transit_service">REGIONAL_TRANSIT_SERVICE</Link></li>
<li><Link href="/usa-buffalo/rural_niagara">RURAL_NIAGARA</Link></li>
<li><Link href="/usa-buffalo/schuyler_county_transit">SCHUYLER_COUNTY_TRANSIT</Link></li>
<li><Link href="/usa-buffalo/shortLine_chenango">SHORTLINE_CHENANGO</Link></li>
<li><Link href="/usa-buffalo/short_line_hudson">SHORT_LINE_HUDSON</Link></li>
<li><Link href="/usa-buffalo/steuben_county_transit">STEUBEN_COUNTY_TRANSIT</Link></li>
<li><Link href="/usa-buffalo/tompkins_consolidated_area">TOMPKINS_CONSOLIDATED_AREA</Link></li>
<li><Link href="/usa-buffalo/yates_transit_service">YATES_TRANSIT_SERVICE</Link></li>
</ul>
<h1>Train Services</h1>
<ul className = "no-bullets">
<li><Link href="/usa-buffalo/amtrak">AMTRAK</Link></li>
</ul>
<h1>LightRail Agencies</h1>
<ul className = "no-bullets">
<li><Link href="/usa-buffalo/nfta">NFTA</Link></li>
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
