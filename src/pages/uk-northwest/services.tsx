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
  
  
<li><Link href="/uk-northwest/first_halifax">First Halifax</Link></li>
<li><Link href="/uk-northwest/anthonys_travel">Anthonys Travel</Link></li>
<li><Link href="/uk-northwest/liverpool_city">Liverpool City Sights</Link></li>
<li><Link href="/uk-northwest/express_travel">Express Travel</Link></li>
<li><Link href="/uk-northwest/go_goodwins">Go Goodwins</Link></li>
<li><Link href="/uk-northwest/team_pennine">Team Pennine</Link></li>
<li><Link href="/uk-northwest/mikro_coaches">Mikro Coaches</Link></li>
<li><Link href="/uk-northwest/national_express">National Express</Link></li>
<li><Link href="/uk-northwest/the_burnley">The Burnley Bus Company</Link></li>
<li><Link href="/uk-northwest/the_keighley">The Keighley Bus Company</Link></li>
<li><Link href="/uk-northwest/blackburn_private">Blackburn Private Hire</Link></li>
<li><Link href="/uk-northwest/stagecoach_cumbria">Stagecoach Cumbria and North Lancashire</Link></li>
<li><Link href="/uk-northwest/high_peak">High Peak</Link></li>
<li><Link href="/uk-northwest/vision_bus">Vision Bus</Link></li>
<li><Link href="/uk-northwest/tyrers_coaches">Tyrers Coaches</Link></li>
<li><Link href="/uk-northwest/shane_nuttall">Shane Nuttall</Link></li>
<li><Link href="/uk-northwest/kirkby_lonsdale">Kirkby Lonsdale Coaches</Link></li>
<li><Link href="/uk-northwest/lakeside_coaches">Lakeside Coaches</Link></li>
<li><Link href="/uk-northwest/bestway_travel">Bestway Travel</Link></li>
<li><Link href="/uk-northwest/d_g">D & G Bus</Link></li>
<li><Link href="/uk-northwest/avacab">Avacab</Link></li>
<li><Link href="/uk-northwest/link_line">Link Line Travel</Link></li>
<li><Link href="/uk-northwest/holmeswood_coaches">Holmeswood Coaches Ltd</Link></li>
<li><Link href="/uk-northwest/j_robinson">J Robinson Taxis</Link></li>
<li><Link href="/uk-northwest/charlton_minis">Charlton Minis</Link></li>
<li><Link href="/uk-northwest/hollinshead_coaches">Hollinshead Coaches</Link></li>
<li><Link href="/uk-northwest/blackpool_coach">Blackpool Coach Hire</Link></li>
<li><Link href="/uk-northwest/harris_travel">Harris Travel</Link></li>
<li><Link href="/uk-northwest/arriva_north_east">Arriva North East</Link></li>
<li><Link href="/uk-northwest/the_travellers">The Travellers Choice</Link></li>
<li><Link href="/uk-northwest/cranberry_coachways">Cranberry Coachways</Link></li>
<li><Link href="/uk-northwest/selwyns_travel">Selwyns Travel</Link></li>
<li><Link href="/uk-northwest/p_s">P & S Nelson</Link></li>
<li><Link href="/uk-northwest/viking_coaches">Viking Coaches</Link></li>
<li><Link href="/uk-northwest/iain_mcgregor">Iain McGregor</Link></li>
<li><Link href="/uk-northwest/direct_taxis">Direct Taxis</Link></li>
<li><Link href="/uk-northwest/p_o">P & O Lloyd</Link></li>
<li><Link href="/uk-northwest/north_yorkshire">North Yorkshire County Council</Link></li>
<li><Link href="/uk-northwest/first_greater">First Greater Manchester</Link></li>
<li><Link href="/uk-northwest/hulleys_of_baslow">Hulleys of Baslow</Link></li>
<li><Link href="/uk-northwest/maghull_coaches">Maghull Coaches</Link></li>
<li><Link href="/uk-northwest/belle_vue">Belle Vue Coaches</Link></li>
<li><Link href="/uk-northwest/abbey_coaches">Abbey Coaches</Link></li>
<li><Link href="/uk-northwest/go_north">Go North West</Link></li>
<li><Link href="/uk-northwest/aintree_coachlines">Aintree Coachlines</Link></li>
<li><Link href="/uk-northwest/link_network">Link Network</Link></li>
<li><Link href="/uk-northwest/bretherton_gold">Bretherton Gold Line Tours</Link></li>
<li><Link href="/uk-northwest/cumfybus">Cumfybus</Link></li>
<li><Link href="/uk-northwest/little_gem">Little Gem</Link></li>
<li><Link href="/uk-northwest/ashcroft_travel">Ashcroft Travel</Link></li>
<li><Link href="/uk-northwest/redline_travel">Redline Travel</Link></li>
<li><Link href="/uk-northwest/huyton_travel">Huyton Travel</Link></li>
<li><Link href="/uk-northwest/foreign_support">Foreign Support</Link></li>
<li><Link href="/uk-northwest/stagecoach_merseyside">Stagecoach Merseyside and South Lancashire</Link></li>
<li><Link href="/uk-northwest/waltons_coach">Waltons Coach Hire</Link></li>
<li><Link href="/uk-northwest/first_potteries">First Potteries</Link></li>
<li><Link href="/uk-northwest/jp_travel">JP Travel</Link></li>
<li><Link href="/uk-northwest/moving_people">Moving People</Link></li>
<li><Link href="/uk-northwest/first_halifax_calder">First Halifax, Calder Valley & Huddersfield</Link></li>
<li><Link href="/uk-northwest/travel_assist">Travel Assist</Link></li>
<li><Link href="/uk-northwest/flixbus">Flixbus</Link></li>
<li><Link href="/uk-northwest/olympia_travel">Olympia Travel</Link></li>
<li><Link href="/uk-northwest/scottish_citylink">Scottish Citylink</Link></li>
<li><Link href="/uk-northwest/m_h">M & H Coaches</Link></li>
<li><Link href="/uk-northwest/stagecoach_manchester">Stagecoach Manchester</Link></li>
<li><Link href="/uk-northwest/bradshaws_travel">Bradshaws Travel</Link></li>
<li><Link href="/uk-northwest/northern_star">Northern Star Coach Hire</Link></li>
<li><Link href="/uk-northwest/diamond_bus">Diamond Bus North West</Link></li>
<li><Link href="/uk-northwest/ashcrofts_mini">Ashcrofts Mini Travel</Link></li>
<li><Link href="/uk-northwest/south_pennine">South Pennine Community Transport</Link></li>
<li><Link href="/uk-northwest/eazibus">EaziBus</Link></li>
<li><Link href="/uk-northwest/coach_hire">Coach Hire Executive Travel Ltd</Link></li>
<li><Link href="/uk-northwest/nexus_move">Nexus Move</Link></li>
<li><Link href="/uk-northwest/als_coaches">Als Coaches</Link></li>
<li><Link href="/uk-northwest/beats_tours">Beats Tours</Link></li>
<li><Link href="/uk-northwest/pilkingtonbus">Pilkingtonbus</Link></li>
<li><Link href="/uk-northwest/coastliner_buses">Coastliner Buses</Link></li>
<li><Link href="/uk-northwest/bibbys">Bibbys of Ingleton Ltd</Link></li>
<li><Link href="/uk-northwest/wyre_coaches">Wyre Coaches</Link></li>
<li><Link href="/uk-northwest/pendle_coaches">Pendle Coaches</Link></li>
<li><Link href="/uk-northwest/national_rail">National Rail</Link></li>
<li><Link href="/uk-northwest/hattons_travel">Hattons Travel</Link></li>
<li><Link href="/uk-northwest/b_j">B & J Travel</Link></li>
<li><Link href="/uk-northwest/derek_hilton">Derek Hilton Travel</Link></li>
<li><Link href="/uk-northwest/peoples_bus">Peoples Bus</Link></li>
<li><Link href="/uk-northwest/englands_limousines">Englands Limousines</Link></li>
<li><Link href="/uk-northwest/archway_travel">Archway Travel</Link></li>
<li><Link href="/uk-northwest/arriva_wales">Arriva Wales</Link></li>
<li><Link href="/uk-northwest/hodsons_coaches">Hodsons Coaches</Link></li>
<li><Link href="/uk-northwest/mario_coaches">Mario Coaches</Link></li>
<li><Link href="/uk-northwest/a2b_travel">A2B Travel</Link></li>
<li><Link href="/uk-northwest/wright_way">Wright Way To Travel</Link></li>
<li><Link href="/uk-northwest/stotts_tours">Stotts Tours</Link></li>
<li><Link href="/uk-northwest/preston_bus">Preston Bus</Link></li>
<li><Link href="/uk-northwest/rosso">Rosso</Link></li>
<li><Link href="/uk-northwest/saunders_of_preston">Saunders of Preston</Link></li>
<li><Link href="/uk-northwest/aimees">Aimees</Link></li>
<li><Link href="/uk-northwest/the_blackburn">The Blackburn Bus Company</Link></li>
<li><Link href="/uk-northwest/a_and_j">A and J Taxis</Link></li>
<li><Link href="/uk-northwest/finches">Finches</Link></li>
<li><Link href="/uk-northwest/arriva_north_west">Arriva North West</Link></li>
<li><Link href="/uk-northwest/don_fraser">Don Fraser Coaches</Link></li>
<li><Link href="/uk-northwest/gemsar_travel">Gemsar Travel Limited</Link></li>
<li><Link href="/uk-northwest/bus_blackpool">Blackpool Transport</Link></li>
<li><Link href="/uk-northwest/a1_coaches">A1 Coaches</Link></li>
<li><Link href="/uk-northwest/warringtons">Warringtons Own Buses</Link></li>


  
  
  </ul>
<h1>Train Services</h1>
<ul className = "no-bullets">
  <li><Link href="/uk-northwest/train_national_rail">National Rail</Link></li>
</ul>
<h1>Light Rail agencies</h1>
<ul className = "no-bullets">
  <li><Link href="/uk-northwest/tr_blackpool_transport">Blackpool Transport</Link></li>
  <li><Link href="/uk-northwest/tr_metrolink">Metrolink</Link></li>

</ul>
<h1>Ferry agencies</h1>
<ul className = "no-bullets">

  <li><Link href="/uk-northwest/tr_mersey_ferries">Mersey Ferries</Link></li>
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
