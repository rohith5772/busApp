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
  

  <li><Link href="/uk-westmidlands/chaserider">Chaserider</Link></li>
  <li><Link href="/uk-westmidlands/hollinshead_coaches">Hollinshead Coaches</Link></li>
  <li><Link href="/uk-westmidlands/oswestry_community">Oswestry Community Action (Qube)</Link></li>
  <li><Link href="/uk-westmidlands/n_n">N N Cresswell</Link></li>
  <li><Link href="/uk-westmidlands/owens_travelmaster">Owens Travelmaster</Link></li>
  <li><Link href="/uk-westmidlands/hedgehog_community">Hedgehog Community Bus</Link></li>
  <li><Link href="/uk-westmidlands/flexibus">Flexibus</Link></li>
  <li><Link href="/uk-westmidlands/tanat_valley">Tanat Valley Coaches</Link></li>
  <li><Link href="/uk-westmidlands/glovers">Glovers</Link></li>
  <li><Link href="/uk-westmidlands/flixbus">Flixbus</Link></li>
  <li><Link href="/uk-westmidlands/pulhams_coaches">Pulhams Coaches</Link></li>
  <li><Link href="/uk-westmidlands/celtic_travel">Celtic Travel</Link></li>
  <li><Link href="/uk-westmidlands/national_express_coventry">National Express Coventry</Link></li>
  <li><Link href="/uk-westmidlands/newent_shuttle">Newent Shuttle</Link></li>
  <li><Link href="/uk-westmidlands/high_peak">High Peak</Link></li>
  <li><Link href="/uk-westmidlands/shipston_link">Shipston Link</Link></li>
  <li><Link href="/uk-westmidlands/aimees">Aimees</Link></li>
  <li><Link href="/uk-westmidlands/villager_community">Villager Community Bus (Oxon)</Link></li>
  <li><Link href="/uk-westmidlands/yarranton_brothers">Yarranton Brothers</Link></li>
  <li><Link href="/uk-westmidlands/marchants_coaches">Marchants Coaches</Link></li>
  <li><Link href="/uk-westmidlands/drm_bus">DRM Bus</Link></li>
  <li><Link href="/uk-westmidlands/diamond_bus">Diamond Bus East Midlands</Link></li>
  <li><Link href="/uk-westmidlands/nick_maddy">Nick Maddy Coaches</Link></li>
  <li><Link href="/uk-westmidlands/stagecoach_west">Stagecoach West</Link></li>
  <li><Link href="/uk-westmidlands/walsall_community">Walsall Community Transport</Link></li>
  <li><Link href="/uk-westmidlands/mrd_ltd">MRD Ltd</Link></li>
  <li><Link href="/uk-westmidlands/lms_travel">LMS Travel</Link></li>
  <li><Link href="/uk-westmidlands/d_g">D & G Bus</Link></li>
  <li><Link href="/uk-westmidlands/lloyds_coaches">Lloyds Coaches</Link></li>
  <li><Link href="/uk-westmidlands/lakeside_coaches">Lakeside Coaches</Link></li>
  <li><Link href="/uk-westmidlands/national_rail">National Rail</Link></li>
  <li><Link href="/uk-westmidlands/the_green">The Green Bus</Link></li>
  <li><Link href="/uk-westmidlands/coventry_minibuses">Coventry Minibuses</Link></li>
  <li><Link href="/uk-westmidlands/lilbourne_community">Lilbourne Community Bus</Link></li>
  <li><Link href="/uk-westmidlands/hollands_coaches">Hollands Coaches</Link></li>
  <li><Link href="/uk-westmidlands/ashbourne_community">Ashbourne Community Transport</Link></li>
  <li><Link href="/uk-westmidlands/national_express">National Express West Midlands</Link></li>
  <li><Link href="/uk-westmidlands/viking_coaches">Viking Coaches</Link></li>
  <li><Link href="/uk-westmidlands/arriva_midlands">Arriva Midlands</Link></li>
  <li><Link href="/uk-westmidlands/linburg">Linburg</Link></li>
  <li><Link href="/uk-westmidlands/arriva_wales">Arriva Wales</Link></li>
  <li><Link href="/uk-westmidlands/r_b">R & B Travel</Link></li>
  <li><Link href="/uk-westmidlands/finesse_travel">Finesse Travel</Link></li>
  <li><Link href="/uk-westmidlands/aintree_coachlines">Aintree Coachlines</Link></li>
  <li><Link href="/uk-westmidlands/stanton_of_stoke">Stanton of Stoke</Link></li>
  <li><Link href="/uk-westmidlands/forest_community">Forest Community Transport</Link></li>
  <li><Link href="/uk-westmidlands/newent_community">Newent Community Link</Link></li>
  <li><Link href="/uk-westmidlands/astons_coaches">Astons Coaches</Link></li>
  <li><Link href="/uk-westmidlands/thandi_transport">Thandi Transport Ltd</Link></li>
  <li><Link href="/uk-westmidlands/clearway_of_catshill">Clearway of Catshill</Link></li>
  <li><Link href="/uk-westmidlands/banga_buses">Banga Buses</Link></li>
  <li><Link href="/uk-westmidlands/first_leicester">First Leicester</Link></li>
  <li><Link href="/uk-westmidlands/thandi_red">Thandi Red Limited</Link></li>
  <li><Link href="/uk-westmidlands/igo">igo</Link></li>
  <li><Link href="/uk-westmidlands/trentbarton">trentbarton</Link></li>
  <li><Link href="/uk-westmidlands/pat_coaches">Pat Coaches</Link></li>
  <li><Link href="/uk-westmidlands/national_express">National Express</Link></li>
  <li><Link href="/uk-westmidlands/diamond_bus">Diamond Bus</Link></li>
  <li><Link href="/uk-westmidlands/lugg_valley">Lugg Valley Travel</Link></li>
  <li><Link href="/uk-westmidlands/bennetts">Bennetts</Link></li>
  <li><Link href="/uk-westmidlands/landflight">LandFlight</Link></li>
  <li><Link href="/uk-westmidlands/wyre_forest">Wyre Forest Dial a Ride</Link></li>
  <li><Link href="/uk-westmidlands/sargeants_brothers">Sargeants Brothers</Link></li>
  <li><Link href="/uk-westmidlands/stagecoach_midlands">Stagecoach Midlands</Link></li>
  <li><Link href="/uk-westmidlands/first_potteries">First Potteries</Link></li>
  <li><Link href="/uk-westmidlands/lets_go">Lets Go</Link></li>
  <li><Link href="/uk-westmidlands/stagecoach_south">Stagecoach South Wales</Link></li>
  <li><Link href="/uk-westmidlands/minsterley">Minsterley</Link></li>
  <li><Link href="/uk-westmidlands/first_worcestershire">First Worcestershire</Link></li>
  <li><Link href="/uk-westmidlands/caradoc_coaches">Caradoc Coaches</Link></li>
  <li><Link href="/uk-westmidlands/kevs_cars">Kevs Cars and Coaches</Link></li>
  <li><Link href="/uk-westmidlands/select_bus">Select Bus Services</Link></li>
  <li><Link href="/uk-westmidlands/new_bharat">New Bharat Coaches (Southall, London)</Link></li>
  <li><Link href="/uk-westmidlands/bennetts_travel">Bennetts Travel</Link></li>
  <li><Link href="/uk-westmidlands/catteralls">Catteralls</Link></li>
  <li><Link href="/uk-westmidlands/scraggs">Scraggs</Link></li>
  <li><Link href="/uk-westmidlands/henshaws_coaches">Henshaws Coaches</Link></li>
  <li><Link href="/uk-westmidlands/solus_coaches">Solus Coaches</Link></li>
  <li><Link href="/uk-westmidlands/yeomans_travel">Yeomans Travel</Link></li>

  
  
  </ul>
<h1>Train Services</h1>
<ul className = "no-bullets">
  <li><Link href="/uk-cumbria/tr_national_rail">National Rail</Link></li>
</ul>
<h1>Light Rail agencies</h1>
<ul className = "no-bullets">
 
<li><Link href="/uk-westmidlands/tr_west">West Midlands Metro</Link></li>
<li><Link href="/uk-westmidlands/tr_air_rail">Air-Rail Link</Link></li>

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
