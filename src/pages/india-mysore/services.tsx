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


const Mysore = () => {
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
      <title>All Schedule Timing TimeTable of Mysore City Bus</title><meta name = "keyword" content="find bus schedule,City bus timetable, Mysore City Bus,,bus schedule,"/>
      <meta name = "keyword" content="bus timings Mysore city,Mysore bus route,find bus schedule,Mysore City route map, bus timetable pdf,city bus routes,bus routes list Mysore,Mysore City Bus"/>
          <meta name="description" content="Find Mysore City Bus Routes Schedule Timings TimeTable and info.Get bus Route pdf"/>
              <h1 className="h1class"><a href="" title="Mysore Bus Routes " target="_self">Mysore City Bus Routes</a></h1>

        <div id="map"></div>
        <div className="topnav" id="myTopnav">
        <Link id = "home" href="/india/Mysore/home" className="commonclass">home</Link>
        <Link id = "bustimings" className="commonclass" href="/india/Mysore/bustimings" >Search Bus</Link>
        <Link id = "allbuses" className="commonclass" href="/india/Mysore/allbuses">All Buses</Link>
        <Link id = "contact" className="commonclass" href="/india/Mysore/contact">Contact</Link>
        <Link id = "about" className="commonclass" href="/india/Mysore/about">About</Link>
        <Link id = "metrotimings" className="commonclass" href="/india/Mysore/metrotimings">Metro Timings</Link>


</div>
<main>
<div  className="flex-wrapper">

<div className="container">
<div className="row">
<h1>Bus Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india-mysore/ksrtc_ac_bus">KSRTC AC Bus</Link></li>
  <li><Link href="/india-mysore/ksrtc_ordinary_bus">KSRTC Ordinary Bus</Link></li>
</ul>
<h1>Train Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india-mysore/swr_trains">SWR Trains</Link></li>
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

export default Mysore;
