import React, { useRef } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga';

import { useEffect,useState } from 'react'
//import './homePage.css';

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


const Bengaluru = () => {
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
      <title>All Schedule Timing TimeTable of Bengaluru City Bus</title><meta name = "keyword" content="find bus schedule,City bus timetable, Bengaluru City Bus,,bus schedule,"/>
      <meta name = "keyword" content="bus timings Bengaluru city,Bengaluru bus route,find bus schedule,Bengaluru City route map, bus timetable pdf,city bus routes,bus routes list Bengaluru,Bengaluru City Bus"/>
          <meta name="description" content="Find Bengaluru City Bus Routes Schedule Timings TimeTable and info.Get bus Route pdf"/>
              <h1 className="h1class"><a href="" title="Bengaluru Bus Routes " target="_self">Bengaluru City Bus Routes</a></h1>

        <div id="map"></div>
        <div className="topnav" id="myTopnav">
        <Link id = "home" href="/india/Bengaluru/home" className="commonclass">home</Link>
        <Link id = "bustimings" className="commonclass" href="/india/Bengaluru/bustimings" >Search Bus</Link>
        <Link id = "allbuses" className="commonclass" href="/india/Bengaluru/allbuses">All Buses</Link>
        <Link id = "contact" className="commonclass" href="/india/Bengaluru/contact">Contact</Link>
        <Link id = "about" className="commonclass" href="/india/Bengaluru/about">About</Link>
        <Link id = "metrotimings" className="commonclass" href="/india/Bengaluru/metrotimings">Metro Timings</Link>


</div>
<main>
<div  className="flex-wrapper">

<div className="container">
<div className="row">
<h1>Bus Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india-bengaluru/bmtc_1">Bengaluru Local Buses 1</Link></li>
  <li><Link href="/india-bengaluru/bmtc_2">Bengaluru Local Buses 2</Link></li>
  <li><Link href="/india-bengaluru/bmtc_3">Bengaluru Local Buses 3</Link></li>
  <li><Link href="/india-bengaluru/bmtc_airport_bus">Bengaluru Airport Buses</Link></li>
</ul>
<h1>SWR Trains</h1>
<ul className = "no-bullets">
  <li><Link href="/india-bengaluru/swr_trains">SWR Trains</Link></li>
</ul>
<h1>Metro Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india-bengaluru/metro">Namma Metro
</Link></li>
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

export default Bengaluru;
