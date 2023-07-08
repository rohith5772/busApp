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


const Pune = () => {
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
      <title>All Schedule Timing TimeTable of Pune City Bus</title><meta name = "keyword" content="find bus schedule,City bus timetable, Pune City Bus,,bus schedule,"/>
      <meta name = "keyword" content="bus timings Pune city,Pune bus route,find bus schedule,Pune City route map, bus timetable pdf,city bus routes,bus routes list Pune,Pune City Bus"/>
          <meta name="description" content="Find Pune City Bus Routes Schedule Timings TimeTable and info.Get bus Route pdf"/>
              <h1 className="h1class"><a href="" title="Pune Bus Routes " target="_self">Pune City Bus Routes</a></h1>

        <div id="map"></div>
        <div className="topnav" id="myTopnav">
        <Link id = "home" href="/india/Pune/home" className="commonclass">home</Link>
        <Link id = "bustimings" className="commonclass" href="/india/Pune/bustimings" >Search Bus</Link>
        <Link id = "allbuses" className="commonclass" href="/india/Pune/allbuses">All Buses</Link>
        <Link id = "contact" className="commonclass" href="/india/Pune/contact">Contact</Link>
        <Link id = "about" className="commonclass" href="/india/Pune/about">About</Link>
        <Link id = "metrotimings" className="commonclass" href="/india/Pune/metrotimings">Metro Timings</Link>


</div>
<main>
<div  className="flex-wrapper">

<div className="container">
<div className="row">
<h1>Bus Services</h1>
<ul className = "no-bullets">
    <li><Link href="/uk-eastanglia/lynx">Lynx</Link></li>
    <li><Link href="/uk-eastanglia/centrebus">Centrebus</Link></li>
    <li><Link href="/uk-eastanglia/lord_travel">Lord Travel</Link></li>
    <li><Link href="/uk-eastanglia/h_semmence">H Semmence & Co.</Link></li>
    <li><Link href="/uk-eastanglia/big_green">Big Green Bus Company</Link></li>
    <li><Link href="/uk-eastanglia/first_norfolk">First Norfolk & Suffolk</Link></li>
    <li><Link href="/uk-eastanglia/c_g">C G Myall & Son</Link></li>
    <li><Link href="/uk-eastanglia/star_cabs">Star Cabs</Link></li>
    <li><Link href="/uk-eastanglia/harrods_coaches">Harrods Coaches</Link></li>
    <li><Link href="/uk-eastanglia/national_rail">National Rail</Link></li>
    <li><Link href="/uk-eastanglia/peelings_coaches">Peelings Coaches</Link></li>
    <li><Link href="/uk-eastanglia/a2b_bus">A2B Bus and Coach</Link></li>
    <li><Link href="/uk-eastanglia/coach_services">Coach Services</Link></li>
    <li><Link href="/uk-eastanglia/feline_executive">Feline Executive Travel</Link></li>
    <li><Link href="/uk-eastanglia/villager_community">Villager Community Bus (Beds & Bucks)</Link></li>
    <li><Link href="/uk-eastanglia/whippet_coaches">Whippet Coaches</Link></li>
    <li><Link href="/uk-eastanglia/dews_coaches">Dews Coaches</Link></li>
    <li><Link href="/uk-eastanglia/ramsey">Ramsey and District Community Bus Association</Link></li>
    <li><Link href="/uk-eastanglia/vectare">Vectare</Link></li>
    <li><Link href="/uk-eastanglia/fenland_association">Fenland Association for Community Transport</Link></li>
    <li><Link href="/uk-eastanglia/sanders_coaches">Sanders Coaches</Link></li>
    <li><Link href="/uk-eastanglia/stephensons">Stephensons of Essex</Link></li>
    <li><Link href="/uk-eastanglia/our_bus">Our Bus</Link></li>
    <li><Link href="/uk-eastanglia/ambassador_travel">Ambassador Travel</Link></li>
    <li><Link href="/uk-eastanglia/go_to">Go To Town</Link></li>
    <li><Link href="/uk-eastanglia/simonds">Simonds</Link></li>
    <li><Link href="/uk-eastanglia/konectbus">Konectbus</Link></li>
    <li><Link href="/uk-eastanglia/borderbus">Borderbus</Link></li>
    <li><Link href="/uk-eastanglia/stagecoach_east">Stagecoach East</Link></li>
    <li><Link href="/uk-eastanglia/mil_ken">Mil-Ken Travel</Link></li></ul>
<h1>Train Services</h1>
  <ul className = "no-bullets">
    <li><Link href="/uk-eastanglia/tr_national_rail">National Rail</Link></li>
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

export default Pune;
