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


const Mumbai = () => {
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
      <title>All Schedule Timing TimeTable of Mumbai City Bus</title><meta name = "keyword" content="find bus schedule,City bus timetable, Mumbai City Bus,,bus schedule,"/>
      <meta name = "keyword" content="bus timings Mumbai city,Mumbai bus route,find bus schedule,Mumbai City route map, bus timetable pdf,city bus routes,bus routes list Mumbai,Mumbai City Bus"/>
          <meta name="description" content="Find Mumbai City Bus Routes Schedule Timings TimeTable and info.Get bus Route pdf"/>
              <h1 className="h1class"><a href="" title="Mumbai Bus Routes " target="_self">Mumbai City Bus Routes</a></h1>

        <div id="map"></div>
        <div className="topnav" id="myTopnav">
        <Link id = "home" href="/india/Mumbai/home" className="commonclass">home</Link>
        <Link id = "bustimings" className="commonclass" href="/india/Mumbai/bustimings" >Search Bus</Link>
        <Link id = "allbuses" className="commonclass" href="/india/Mumbai/allbuses">All Buses</Link>
        <Link id = "contact" className="commonclass" href="/india/Mumbai/contact">Contact</Link>
        <Link id = "about" className="commonclass" href="/india/Mumbai/about">About</Link>
        <Link id = "metrotimings" className="commonclass" href="/india/Mumbai/metrotimings">Metro Timings</Link>


</div>
<main>
<div  className="flex-wrapper">

<div className="container">
<div className="row">
<h1>Bus Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india-mumbai/best_bus">BEST bus</Link></li>
  <li><Link href="/india-mumbai/best_ac_bus">BEST AC Buses</Link></li>
  <li><Link href="/india-mumbai/night_bus">BEST Night Bus</Link></li>
  <li><Link href="/india-mumbai/chalo_premium">BEST Chalo Premium Bus Service</Link></li>
  <li><Link href="/india-mumbai/tmt_bus">TMT bus</Link></li>
  <li><Link href="/india-mumbai/tmt_ac_bus">TMT AC bus</Link></li>
  <li><Link href="/india-mumbai/nmmt_bus">NMMT bus</Link></li>
  <li><Link href="/india-mumbai/nmmt_ac_bus">NMMT AC Buses</Link></li>
  <li><Link href="/india-mumbai/kdmt_bus">KDMT bus</Link></li>
  <li><Link href="/india-mumbai/kdmt_ac_bus">KDMT AC bus</Link></li>
  <li><Link href="/india-mumbai/vvmt_bus">VVMT bus</Link></li>
  <li><Link href="/india-mumbai/mbmt_bus">MBMT bus</Link></li>
  <li><Link href="/india-mumbai/mbmt_ac_bus">MBMT AC Bus</Link></li>
  <li><Link href="/india-mumbai/kmt_bus">KMT bus</Link></li>

</ul>
<h1>Train Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india-mumbai/local_train_1">Mumbai Local Train</Link></li>
  <li><Link href="/india-mumbai/local_train_2">Mumbai Local Train</Link></li>
  <li><Link href="/india-mumbai/local_train_3">Mumbai Local Train</Link></li>
  <li><Link href="/india-mumbai/local_train_4">Mumbai Local Train</Link></li>
  <li><Link href="/india-mumbai/local_train_5">Mumbai Local Train</Link></li>
  <li><Link href="/india-mumbai/local_train_6">Mumbai Local Train</Link></li>
  <li><Link href="/india-mumbai/local_train_7">Mumbai Local Train</Link></li>
  <li><Link href="/india-mumbai/local_train_8">Mumbai Local Train</Link></li>


</ul>

<h1>Metro Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india-mumbai/metro1">Mumbai Metro</Link></li>
  <li><Link href="/india-mumbai/metro2">Mumbai Metro</Link></li>
</ul>
<h1>Light Rail Services</h1>
<ul className = "no-bullets">
<li><Link href="/india-mumbai/mono_rail">Mumbai Monorail</Link></li>
</ul>
<h1>Ferry Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india-mumbai/msrdc_ferry">MSRDC Ferry</Link></li>
  <li><Link href="/india-mumbai/ferry">M2M Ferry</Link></li>
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

export default Mumbai;
