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
  <li><Link href="/uk-cumbria/jh_coaches">JH Coaches</Link></li>
  <li><Link href="/uk-cumbria/green_mountain">Green Mountain Travel</Link></li>
  <li><Link href="/uk-cumbria/hodgsons">Hodgsons</Link></li>
  <li><Link href="/uk-cumbria/stagecoach_cumbria">Stagecoach Cumbria and North Lancashire</Link></li>
  <li><Link href="/uk-cumbria/weardale_motor">Weardale Motor Services</Link></li>
  <li><Link href="/uk-cumbria/gem_travel">Gem Travel</Link></li>
  <li><Link href="/uk-cumbria/travelsure">Travelsure</Link></li>
  <li><Link href="/uk-cumbria/stanley_travel">Stanley Travel</Link></li>
  <li><Link href="/uk-cumbria/pauls_travel">Pauls Travel</Link></li>
  <li><Link href="/uk-cumbria/the_little">The Little White Bus</Link></li>
  <li><Link href="/uk-cumbria/borders_buses">Borders Buses</Link></li>
  <li><Link href="/uk-cumbria/nexus_metro">Nexus Metro Replacement</Link></li>
  <li><Link href="/uk-cumbria/national_rail">National Rail</Link></li>
  <li><Link href="/uk-cumbria/phoenix_coaches">Phoenix Coaches</Link></li>
  <li><Link href="/uk-cumbria/go_north">Go North East</Link></li>
  <li><Link href="/uk-cumbria/cumbria_classic">Cumbria Classic Coaches</Link></li>
  <li><Link href="/uk-cumbria/station_taxis">Station Taxis</Link></li>
  <li><Link href="/uk-cumbria/arriva_north">Arriva North East</Link></li>
  <li><Link href="/uk-cumbria/peter_hogg">Peter Hogg of Jedburgh</Link></li>
  <li><Link href="/uk-cumbria/upper_coquetdale">Upper Coquetdale Community Transport</Link></li>
  <li><Link href="/uk-cumbria/glen_valley">Glen Valley Tours</Link></li>
  <li><Link href="/uk-cumbria/adapt_north">ADAPT North East</Link></li>
  <li><Link href="/uk-cumbria/gateshead_central">Gateshead Central Taxis</Link></li>
  <li><Link href="/uk-cumbria/stagecoach_north">Stagecoach North East</Link></li>
  <li><Link href="/uk-cumbria/coatham_coaches">Coatham Coaches</Link></li>
  <li><Link href="/uk-cumbria/berwick_buses">Berwick Buses</Link></li>
  <li><Link href="/uk-cumbria/a_line">A-line Coaches</Link></li>
  <li><Link href="/uk-cumbria/rural_link">Rural Link Limited</Link></li>
  <li><Link href="/uk-cumbria/generation_travel">Generation Travel</Link></li>
</ul>
<h1>Train Services</h1>
<ul className = "no-bullets">
  <li><Link href="/uk-cumbria/tr_national_rail">National Rail</Link></li>
</ul>
<h1>Underground agencies</h1>
<ul className = "no-bullets">
  <li><Link href="/uk-cumbria/tr_tyne">Tyne and Wear Metro</Link></li>
</ul>
<h1>Ferry agencies</h1>
<ul className = "no-bullets">
  <li><Link href="/uk-cumbria/tr_nexus">Nexus Ferry</Link></li>
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
