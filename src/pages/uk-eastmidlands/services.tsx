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
  
  <li><Link href="/uk-eastmidlands/arriva_midlands">Arriva Midlands</Link></li>
  <li><Link href="/uk-eastmidlands/glovers">Glovers</Link></li>
  <li><Link href="/uk-eastmidlands/viking_coaches">Viking Coaches</Link></li>
  <li><Link href="/uk-eastmidlands/sleafordian_coaches">Sleafordian Coaches</Link></li>
  <li><Link href="/uk-eastmidlands/blands">Blands</Link></li>
  <li><Link href="/uk-eastmidlands/littles_travel">Littles Travel</Link></li>
  <li><Link href="/uk-eastmidlands/high_peak">High Peak</Link></li>
  <li><Link href="/uk-eastmidlands/vectare">Vectare</Link></li>
  <li><Link href="/uk-eastmidlands/a_c">A C Williams</Link></li>
  <li><Link href="/uk-eastmidlands/tm_travel">TM Travel</Link></li>
  <li><Link href="/uk-eastmidlands/sharpes">Sharpes of Nottingham</Link></li>
  <li><Link href="/uk-eastmidlands/stotts_tours">Stotts Tours</Link></li>
  <li><Link href="/uk-eastmidlands/harpurs_coaches">Harpurs Coaches</Link></li>
  <li><Link href="/uk-eastmidlands/j_r">J R Dent Coaches</Link></li>
  <li><Link href="/uk-eastmidlands/nottingham_city">Nottingham City Transport</Link></li>
  <li><Link href="/uk-eastmidlands/andrews">Andrews of Tideswell</Link></li>
  <li><Link href="/uk-eastmidlands/ravenshead_community">Ravenshead Community Project</Link></li>
  <li><Link href="/uk-eastmidlands/nottingham_minibus">Nottingham Minibus</Link></li>
  <li><Link href="/uk-eastmidlands/notts_and_derby">Notts and Derby</Link></li>
  <li><Link href="/uk-eastmidlands/haines_coaches">Haines Coaches</Link></li>
  <li><Link href="/uk-eastmidlands/hawkes_coaches">Hawkes Coaches</Link></li>
  <li><Link href="/uk-eastmidlands/britannia_bus">Britannia Bus</Link></li>
  <li><Link href="/uk-eastmidlands/slacks">Slacks</Link></li>
  <li><Link href="/uk-eastmidlands/bagnalls">Bagnalls</Link></li>
  <li><Link href="/uk-eastmidlands/stagecoach_midlands">Stagecoach Midlands</Link></li>
  <li><Link href="/uk-eastmidlands/grayscroft_coaches">Grayscroft Coaches</Link></li>
  <li><Link href="/uk-eastmidlands/hunts_coaches">Hunts Coaches</Link></li>
  <li><Link href="/uk-eastmidlands/ashbourne_community">Ashbourne Community Transport</Link></li>
  <li><Link href="/uk-eastmidlands/stagecoach_east">Stagecoach East</Link></li>
  <li><Link href="/uk-eastmidlands/kettlewells">Kettlewells</Link></li>
  <li><Link href="/uk-eastmidlands/national_rail">National Rail</Link></li>
  <li><Link href="/uk-eastmidlands/lawsons">Lawsons of Corby</Link></li>
  <li><Link href="/uk-eastmidlands/hornsbys_bus">Hornsbys Bus & Coach</Link></li>
  <li><Link href="/uk-eastmidlands/linburg">Linburg</Link></li>
  <li><Link href="/uk-eastmidlands/first_leicester">First Leicester</Link></li>
  <li><Link href="/uk-eastmidlands/brylaine_travel">Brylaine Travel</Link></li>
  <li><Link href="/uk-eastmidlands/uno">Uno</Link></li>
  <li><Link href="/uk-eastmidlands/delaine_buses">Delaine Buses</Link></li>
  <li><Link href="/uk-eastmidlands/hulleys">Hulleys of Baslow</Link></li>
  <li><Link href="/uk-eastmidlands/our_centre">Our Centre</Link></li>
  <li><Link href="/uk-eastmidlands/d_g">D & G Bus</Link></li>
  <li><Link href="/uk-eastmidlands/north_lincolnshire">North Lincolnshire Council</Link></li>
  <li><Link href="/uk-eastmidlands/trent_barton">Trent Barton bus</Link></li>
  <li><Link href="/uk-eastmidlands/arriva_derby">Arriva Derby</Link></li>
  <li><Link href="/uk-eastmidlands/marshalls">Marshalls of Sutton on Trent</Link></li>
  <li><Link href="/uk-eastmidlands/south_pennine">South Pennine Community Transport</Link></li>
  <li><Link href="/uk-eastmidlands/gem_mini">Gem Mini Travel</Link></li>
  <li><Link href="/uk-eastmidlands/nottinghamshire_county">Nottinghamshire County Council Fleet Services</Link></li>
  <li><Link href="/uk-eastmidlands/ct4n">CT4N</Link></li>
  <li><Link href="/uk-eastmidlands/callconnect">CallConnect</Link></li>
  <li><Link href="/uk-eastmidlands/black_cat">Black Cat Travel</Link></li>
  <li><Link href="/uk-eastmidlands/diamond_bus">Diamond Bus East Midlands</Link></li>
  <li><Link href="/uk-eastmidlands/soar_valley">Soar Valley Community Bus</Link></li>
  <li><Link href="/uk-eastmidlands/pc_coaches">PC Coaches</Link></li>
  <li><Link href="/uk-eastmidlands/cogenhoe">Cogenhoe and Whiston Parish Council</Link></li>
  <li><Link href="/uk-eastmidlands/kinchbus">Kinchbus</Link></li>
  <li><Link href="/uk-eastmidlands/derbyshire_community">Derbyshire Community Transport</Link></li>
  <li><Link href="/uk-eastmidlands/stagecoach_east">Stagecoach East Midlands</Link></li>
  <li><Link href="/uk-eastmidlands/flexibus">Flexibus</Link></li>
  <li><Link href="/uk-eastmidlands/east_yorkshire">East Yorkshire</Link></li>
  <li><Link href="/uk-eastmidlands/ashley_travel">Ashley Travel</Link></li>
  <li><Link href="/uk-eastmidlands/centrebus">Centrebus</Link></li>
  <li><Link href="/uk-eastmidlands/fowlers_travel">Fowlers Travel</Link></li>
  <li><Link href="/uk-eastmidlands/transportconnect">TransportConnect</Link></li>
  <li><Link href="/uk-eastmidlands/stagecoach_yorkshire">Stagecoach Yorkshire</Link></li>
  <li><Link href="/uk-eastmidlands/roberts_coaches">Roberts Coaches</Link></li>
  
  
  </ul>
<h1>Train Services</h1>
<ul className = "no-bullets">
  <li><Link href="/uk-eastmidlands/tr_national_rail">National Rail</Link></li>
</ul>
<h1>Light Rail agencies</h1>
<ul className = "no-bullets">
  <li><Link href="/uk-eastmidlands/tr_nottingham_express_transit">Nottingham Express Transit (Tram)</Link></li>
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
