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
<li><Link href="/usa-sacramento/amador">AMADOR</Link></li>
<li><Link href="/usa-sacramento/amtrak_chartered">AMTRAK_CHARTERED</Link></li>
<li><Link href="/usa-sacramento/auburn_loop">AUBURN_LOOP</Link></li>
<li><Link href="/usa-sacramento/b">B</Link></li>
<li><Link href="/usa-sacramento/capitol_corridor">CAPITOL_CORRIDOR</Link></li>
<li><Link href="/usa-sacramento/city_coach">CITY_COACH</Link></li>
<li><Link href="/usa-sacramento/e">E</Link></li>
<li><Link href="/usa-sacramento/el_dorado">EL_DORADO</Link></li>
<li><Link href="/usa-sacramento/nevada_county">NEVADA_COUNTY</Link></li>
<li><Link href="/usa-sacramento/placer_county">PLACER_COUNTY</Link></li>
<li><Link href="/usa-sacramento/roseville_transit">ROSEVILLE_TRANSIT</Link></li>
<li><Link href="/usa-sacramento/sacrt">SACRT</Link></li>
<li><Link href="/usa-sacramento/sct_link">SCT_LINK</Link></li>
<li><Link href="/usa-sacramento/unitrans">UNITRANS</Link></li>
<li><Link href="/usa-sacramento/yolo_bus">YOLO_BUS</Link></li>
<li><Link href="/usa-sacramento/yuba">YUBA</Link></li>



</ul>

<h1>Train Services</h1>
<ul className = "no-bullets">
<li><Link href="/usa-sacramento/capitol_corridor">CAPITOL_CORRIDOR</Link></li>
<li><Link href="/usa-sacramento/amtrak">AMTRAK</Link></li>
</ul>
<h1>Light Rail Services</h1>
<ul className = "no-bullets">
<li><Link href="/usa-sacramento/sacrt">SACRT</Link></li>
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