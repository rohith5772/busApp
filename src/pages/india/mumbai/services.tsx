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
import Loader from '../../../components/loader';
//map
//from,to text fields
//search button

//farecomparision button
//farecomparision page


const Hyderabad = () => {
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
      <title>All Schedule Timing TimeTable of hyderabad City Bus</title><meta name = "keyword" content="find bus schedule,City bus timetable, hyderabad City Bus,,bus schedule,"/>
      <meta name = "keyword" content="bus timings hyderabad city,hyderabad bus route,find bus schedule,hyderabad City route map, bus timetable pdf,city bus routes,bus routes list hyderabad,hyderabad City Bus"/>
          <meta name="description" content="Find hyderabad City Bus Routes Schedule Timings TimeTable and info.Get bus Route pdf"/>
              <h1 className="h1class"><a href="" title="hyderabad Bus Routes " target="_self">hyderabad City Bus Routes</a></h1>

        <div id="map"></div>
        <div className="topnav" id="myTopnav">
        <Link id = "home" href="/india/hyderabad/home" className="commonclass">home</Link>
        <Link id = "bustimings" className="commonclass" href="/india/hyderabad/bustimings" >Search Bus</Link>
        <Link id = "allbuses" className="commonclass" href="/india/hyderabad/allbuses">All Buses</Link>
        <Link id = "contact" className="commonclass" href="/india/hyderabad/contact">Contact</Link>
        <Link id = "about" className="commonclass" href="/india/hyderabad/about">About</Link>
        <Link id = "metrotimings" className="commonclass" href="/india/hyderabad/metrotimings">Metro Timings</Link>


</div>
<main>
<div  className="flex-wrapper">

<div className="container">
<div className="row">
<h1>Bus Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india/mumbai/bus-service/best_bus">BEST bus</Link></li>
  <li><Link href="/india/mumbai/bus-service/best_ac_bus">BEST AC Buses</Link></li>
  <li><Link href="/india/mumbai/bus-service/night_bus">BEST Night Bus</Link></li>
  <li><Link href="/india/mumbai/bus-service/chalo_premium">BEST Chalo Premium Bus Service</Link></li>
  <li><Link href="/india/mumbai/bus-service/tmt_bus">TMT bus</Link></li>
  <li><Link href="/india/mumbai/bus-service/tmt_ac_bus">TMT AC bus</Link></li>
  <li><Link href="/india/mumbai/bus-service/nmmt_bus">NMMT bus</Link></li>
  <li><Link href="/india/mumbai/bus-service/nmmt_ac_bus">NMMT AC Buses</Link></li>
  <li><Link href="/india/mumbai/bus-service/kdmt_bus">KDMT bus</Link></li>
  <li><Link href="/india/mumbai/bus-service/kdmt_ac_bus">KDMT AC bus</Link></li>
  <li><Link href="/india/mumbai/bus-service/vvmt_bus">VVMT bus</Link></li>
  <li><Link href="/india/mumbai/bus-service/mbmt_bus">MBMT bus</Link></li>
  <li><Link href="/india/mumbai/bus-service/mbmt_ac_bus">MBMT AC Bus</Link></li>
  <li><Link href="/india/mumbai/bus-service/kmt_bus">KMT bus</Link></li>

</ul>
<h1>Train Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india/mumbai/train-service/local_train_1">Mumbai Local Train</Link></li>
  <li><Link href="/india/mumbai/train-service/local_train_2">Mumbai Local Train</Link></li>
  <li><Link href="/india/mumbai/train-service/local_train_3">Mumbai Local Train</Link></li>
  <li><Link href="/india/mumbai/train-service/local_train_4">Mumbai Local Train</Link></li>
  <li><Link href="/india/mumbai/train-service/local_train_5">Mumbai Local Train</Link></li>
  <li><Link href="/india/mumbai/train-service/local_train_6">Mumbai Local Train</Link></li>
  <li><Link href="/india/mumbai/train-service/local_train_7">Mumbai Local Train</Link></li>
  <li><Link href="/india/mumbai/train-service/local_train_8">Mumbai Local Train</Link></li>


</ul>

<h1>Metro Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india/mumbai/train-service/metro1">Mumbai Metro</Link></li>
  <li><Link href="/india/mumbai/train-service/metro2">Mumbai Metro</Link></li>
</ul>
<h1>Light Rail Services</h1>
<ul className = "no-bullets">
<li><Link href="/india/mumbai/train-service/mono_rail">Mumbai Monorail</Link></li>
</ul>
<h1>Ferry Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india/mumbai/train-service/msrdc_ferry">MSRDC Ferry</Link></li>
  <li><Link href="/india/mumbai/train-service/ferry">M2M Ferry</Link></li>
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

export default Hyderabad;
