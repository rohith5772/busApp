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


const Chennai = () => {
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
      <title>All Schedule Timing TimeTable of Chennai City Bus</title><meta name = "keyword" content="find bus schedule,City bus timetable, Chennai City Bus,,bus schedule,"/>
      <meta name = "keyword" content="bus timings Chennai city,Chennai bus route,find bus schedule,Chennai City route map, bus timetable pdf,city bus routes,bus routes list Chennai,Chennai City Bus"/>
          <meta name="description" content="Find Chennai City Bus Routes Schedule Timings TimeTable and info.Get bus Route pdf"/>
              <h1 className="h1class"><a href="" title="Chennai Bus Routes " target="_self">Chennai City Bus Routes</a></h1>

        <div id="map"></div>
        <div className="topnav" id="myTopnav">
        <Link id = "home" href="/india/Chennai/home" className="commonclass">home</Link>
        <Link id = "bustimings" className="commonclass" href="/india/Chennai/bustimings" >Search Bus</Link>
        <Link id = "allbuses" className="commonclass" href="/india/Chennai/allbuses">All Buses</Link>
        <Link id = "contact" className="commonclass" href="/india/Chennai/contact">Contact</Link>
        <Link id = "about" className="commonclass" href="/india/Chennai/about">About</Link>
        <Link id = "metrotimings" className="commonclass" href="/india/Chennai/metrotimings">Metro Timings</Link>


</div>
<main>
<div  className="flex-wrapper">

<div className="container">
<div className="row">
<h1>Bus Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india-chennai/cmrl_mf_bus">CMRL MF Buses</Link></li>
  <li><Link href="/india-chennai/ordinary_bus">MTC Ordinary Bus</Link></li>
  <li><Link href="/india-chennai/small_bus">MTC Small Bus</Link></li>
  <li><Link href="/india-chennai/deluxe_bus">MTC Deluxe Bus</Link></li>
  <li><Link href="/india-chennai/express_bus">MTC Express Bus</Link></li>
  <li><Link href="/india-chennai/ac_bus">MTC AC Bus</Link></li>

</ul>
<h1>Train agencies</h1>
<ul className = "no-bullets">
  <li><Link href="/india-chennai/suburban_rail">Chennai Suburban Rail</Link></li>
</ul>
<h1>Metro Services</h1>
<ul className = "no-bullets">
  <li><Link href="/india-chennai/metro">Chennai Metro</Link></li>
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

export default Chennai;
