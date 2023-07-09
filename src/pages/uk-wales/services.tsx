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
  

<li><Link href="/uk-wales/jones_login">Jones Login</Link></li>
<li><Link href="/uk-wales/peyton_travel">Peyton Travel</Link></li>
<li><Link href="/uk-wales/clynnog_trefor">Clynnog & Trefor</Link></li>
<li><Link href="/uk-wales/clynnog_trefor_berwyn">Clynnog & Trefor / Berwyn Coaches</Link></li>
<li><Link href="/uk-wales/edwards_coaches">Edwards Coaches</Link></li>
<li><Link href="/uk-wales/gwynfor_coaches">Gwynfor Coaches</Link></li>
<li><Link href="/uk-wales/lewis_y">Lewis Y Llan</Link></li>
<li><Link href="/uk-wales/dilwyn_coaches">Dilwyn Coaches</Link></li>
<li><Link href="/uk-wales/henleys">Henleys</Link></li>
<li><Link href="/uk-wales/briggs_coaches">Briggs Coaches</Link></li>
<li><Link href="/uk-wales/thomas_herbert">Thomas Herbert Jones & Partners</Link></li>
<li><Link href="/uk-wales/adventure_travel">Adventure Travel</Link></li>
<li><Link href="/uk-wales/select_coaches">Select Coaches</Link></li>
<li><Link href="/uk-wales/first_south">First South & West Wales</Link></li>
<li><Link href="/uk-wales/lloyds_coaches">Lloyds Coaches</Link></li>
<li><Link href="/uk-wales/ridgways">Ridgways</Link></li>
<li><Link href="/uk-wales/sargeants_brothers">Sargeants Brothers</Link></li>
<li><Link href="/uk-wales/berwyn">Berwyn</Link></li>
<li><Link href="/uk-wales/sarah_bell">Sarah Bell</Link></li>
<li><Link href="/uk-wales/pembrokeshire_county">Pembrokeshire County Council</Link></li>
<li><Link href="/uk-wales/llew_jones">Llew Jones Coaches</Link></li>
<li><Link href="/uk-wales/stagecoach_south">Stagecoach South Wales</Link></li>
<li><Link href="/uk-wales/thomas">Thomas of Rhondda</Link></li>
<li><Link href="/uk-wales/o_r">O R Jones</Link></li>
<li><Link href="/uk-wales/wrexham_taxis">Wrexham Taxis</Link></li>
<li><Link href="/uk-wales/oswestry_community">Oswestry Community Action (Qube)</Link></li>
<li><Link href="/uk-wales/first_call">First Call</Link></li>
<li><Link href="/uk-wales/eifions_coaches">Eifions Coaches</Link></li>
<li><Link href="/uk-wales/morris_travel">Morris Travel</Link></li>
<li><Link href="/uk-wales/taf_valley">Taf Valley Coaches</Link></li>
<li><Link href="/uk-wales/keepings_coaches">Keepings Coaches</Link></li>
<li><Link href="/uk-wales/richards_bros">Richards Bros</Link></li>
<li><Link href="/uk-wales/yeomans_travel">Yeomans Travel</Link></li>
<li><Link href="/uk-wales/evans_coaches">Evans Coaches Tregaron Limited</Link></li>
<li><Link href="/uk-wales/newport_bus">Newport Bus</Link></li>
<li><Link href="/uk-wales/dansa">DANSA</Link></li>
<li><Link href="/uk-wales/arriva_midlands">Arriva Midlands</Link></li>
<li><Link href="/uk-wales/arriva_wales">Arriva Wales</Link></li>
<li><Link href="/uk-wales/peters_minibus">Peters Minibus Hire</Link></li>
<li><Link href="/uk-wales/cardiff_bus">Cardiff Bus</Link></li>
<li><Link href="/uk-wales/south_wales">South Wales Transport</Link></li>
<li><Link href="/uk-wales/tanat_valley">Tanat Valley Coaches</Link></li>
<li><Link href="/uk-wales/p_s">P & S Travel</Link></li>
<li><Link href="/uk-wales/national_rail">National Rail</Link></li>
<li><Link href="/uk-wales/caerphilly_county">Caerphilly County Borough Council</Link></li>
<li><Link href="/uk-wales/nefyn">Nefyn</Link></li>
<li><Link href="/uk-wales/m_h">M & H Coaches</Link></li>
<li><Link href="/uk-wales/phil_anslow">Phil Anslow Travel</Link></li>
<li><Link href="/uk-wales/partneriaeth_ogwen">Partneriaeth Ogwen</Link></li>
<li><Link href="/uk-wales/p_o">P & O Lloyd</Link></li>
<li><Link href="/uk-wales/townlynx">Townlynx</Link></li>
<li><Link href="/uk-wales/swansea_council">Swansea Council</Link></li>
<li><Link href="/uk-wales/celtic_travel">Celtic Travel</Link></li>
<li><Link href="/uk-wales/monmouthshire">Monmouthshire County Council</Link></li>
<li><Link href="/uk-wales/village_valleys">Village & Valleys Travel</Link></li>
<li><Link href="/uk-wales/owen_travelmaster">Owen Travelmaster</Link></li>
<li><Link href="/uk-wales/denbighshire_council">Denbighshire Council</Link></li>
<li><Link href="/uk-wales/mid_wales">Mid Wales Travel</Link></li>
<li><Link href="/uk-wales/goodsir">Goodsir</Link></li>
<li><Link href="/uk-wales/harris_coaches">Harris Coaches</Link></li>
<li><Link href="/uk-wales/sp_cars">SP Cars</Link></li>
<li><Link href="/uk-wales/valentines_travel">Valentines Travel</Link></li>
<li><Link href="/uk-wales/crickhowell_taxis">Crickhowell Taxis</Link></li>
<li><Link href="/uk-wales/pat_coaches">Pat Coaches</Link></li>

  
  
  </ul>
<h1>Train Services</h1>
<ul className = "no-bullets">
  <li><Link href="/uk-wales/tr_national_rail">National Rail</Link></li>
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
