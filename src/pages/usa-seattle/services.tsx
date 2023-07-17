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
<li><Link href="/usa-seattle/amtrak_chartered_vehicle">Amtra_Chartered_Vehicle</Link></li>
<li><Link href="/usa-seattle/cantrail">Cantrail</Link></li>
<li><Link href="/usa-seattle/clallam_transit">Clallam_Transit</Link></li>
<li><Link href="/usa-seattle/ct">CT</Link></li>
<li><Link href="/usa-seattle/dungeness_line">Dungeness_Line</Link></li>
<li><Link href="/usa-seattle/everett_transit">Everett_Transit</Link></li>
<li><Link href="/usa-seattle/grays_harbor_transit">Grays_Harbor_Transit</Link></li>
<li><Link href="/usa-seattle/intercity_transit">Intercity_Transit</Link></li>
<li><Link href="/usa-seattle/island_transit">Island_Transit</Link></li>
<li><Link href="/usa-seattle/jefferson_transit">Jefferson_Transit</Link></li>
<li><Link href="/usa-seattle/kitsap_bus">Kitsap_Bus</Link></li>
<li><Link href="/usa-seattle/metro">Metro</Link></li>
<li><Link href="/usa-seattle/mta">MTA</Link></li>
<li><Link href="/usa-seattle/northwestern_trailways">Northwestern_Trailways</Link></li>
<li><Link href="/usa-seattle/pierce_transit1">Pierce_Transit1</Link></li>
<li><Link href="/usa-seattle/pierce_transit2">Pierce_Transit2</Link></li>
<li><Link href="/usa-seattle/seatac_airport_shuttle">Seatac_Airport_Shuttle</Link></li>
<li><Link href="/usa-seattle/seattle_childrens_hospital">Seattle_Childrens_Hospital</Link></li>
<li><Link href="/usa-seattle/seattle_downtown_circulator_bus">Seattle_Downtown_Circulator_Bus</Link></li>
<li><Link href="/usa-seattle/skagit_transit">Skagit_Transit</Link></li>
<li><Link href="/usa-seattle/st">ST</Link></li>
<li><Link href="/usa-seattle/svt1">SVT</Link></li>
<li><Link href="/usa-seattle/svt2">SVT</Link></li>
<li><Link href="/usa-seattle/twin_transit">TWIN_TRANSIT</Link></li>
<li><Link href="/usa-seattle/whatcom_transportation_authority">Whatcom_Transportation_Authority</Link></li>

</ul>

<h1>Train Services</h1>
<ul className = "no-bullets">
<li><Link href="/usa-seattle/amtrak">Amtrak</Link></li>
<li><Link href="/usa-seattle/sound_transit_train">Sound_Transit_Train</Link></li>
</ul>

<h1>Light Rail  Services</h1>
<ul className = "no-bullets">
<li><Link href="/usa-seattle/seattle_center_monorail">Seattle_Center_Monorail</Link></li>
<li><Link href="/usa-seattle/seattle_streetcar">Seattle_Streetcar</Link></li>
<li><Link href="/usa-seattle/sound_transit_rail">Sound_Transit</Link></li>

</ul>

<h1>Ferry Services</h1>
<ul className = "no-bullets">
<li><Link href="/usa-seattle/kcm">KCM</Link></li>
<li><Link href="/usa-seattle/kitsap_ferry">Kitsap_Ferry</Link></li>
<li><Link href="/usa-seattle/victoria_clipper">Victoria_Clipper</Link></li>
<li><Link href="/usa-seattle/wsdot">WSDOT</Link></li>
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
