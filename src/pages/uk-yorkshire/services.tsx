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
  

  
<li><Link href="/uk-yorkshire/western_dales">Western Dales Community Bus</Link></li>
<li><Link href="/uk-yorkshire/coastal_and_country">Coastal and Country Coaches</Link></li>
<li><Link href="/uk-yorkshire/the_keighley">The Keighley Bus Company</Link></li>
<li><Link href="/uk-yorkshire/team_pennine">Team Pennine</Link></li>
<li><Link href="/uk-yorkshire/hodgsons">Hodgsons</Link></li>
<li><Link href="/uk-yorkshire/north_yorkshire">North Yorkshire County Council</Link></li>
<li><Link href="/uk-yorkshire/goole_go">Goole Go Far</Link></li>
<li><Link href="/uk-yorkshire/ross_travel">Ross Travel</Link></li>
<li><Link href="/uk-yorkshire/pc_coaches">PC Coaches</Link></li>
<li><Link href="/uk-yorkshire/sheffield_community">Sheffield Community Transport</Link></li>
<li><Link href="/uk-yorkshire/the_little">The Little White Bus</Link></li>
<li><Link href="/uk-yorkshire/first_halifax">First Halifax, Calder Valley & Huddersfield</Link></li>
<li><Link href="/uk-yorkshire/megabus">Megabus</Link></li>
<li><Link href="/uk-yorkshire/connexions_buses">Connexions Buses</Link></li>
<li><Link href="/uk-yorkshire/tlc_travel">TLC Travel Ltd</Link></li>
<li><Link href="/uk-yorkshire/hulleys_of_baslow">Hulleys of Baslow</Link></li>
<li><Link href="/uk-yorkshire/national_express">National Express</Link></li>
<li><Link href="/uk-yorkshire/first_bradford">First Bradford</Link></li>
<li><Link href="/uk-yorkshire/yorkshire_travel">Yorkshire Travel Group</Link></li>
<li><Link href="/uk-yorkshire/johnson_brothers">Johnson Brothers</Link></li>
<li><Link href="/uk-yorkshire/olympic_coaches">Olympic Coaches</Link></li>
<li><Link href="/uk-yorkshire/linburg">Linburg</Link></li>
<li><Link href="/uk-yorkshire/south_pennine">South Pennine Community Transport</Link></li>
<li><Link href="/uk-yorkshire/ss_suncruisers">SS Suncruisers</Link></li>
<li><Link href="/uk-yorkshire/first_west">First West Yorkshire Ltd</Link></li>
<li><Link href="/uk-yorkshire/the_burnley">The Burnley Bus Company</Link></li>
<li><Link href="/uk-yorkshire/wilfreda_beehive">Wilfreda Beehive</Link></li>
<li><Link href="/uk-yorkshire/rosso">Rosso</Link></li>
<li><Link href="/uk-yorkshire/dales_and_district">Dales and District</Link></li>
<li><Link href="/uk-yorkshire/flixbus">Flixbus</Link></li>
<li><Link href="/uk-yorkshire/tm_travel">TM Travel</Link></li>
<li><Link href="/uk-yorkshire/john_l">John L Law</Link></li>
<li><Link href="/uk-yorkshire/ashley_travel">Ashley Travel</Link></li>
<li><Link href="/uk-yorkshire/first_york">First York</Link></li>
<li><Link href="/uk-yorkshire/moxons_tours">Moxons Tours</Link></li>
<li><Link href="/uk-yorkshire/arriva_yorkshire">Arriva Yorkshire</Link></li>
<li><Link href="/uk-yorkshire/a_lyles">A Lyles and Son</Link></li>
<li><Link href="/uk-yorkshire/globe_holidays">Globe Holidays</Link></li>
<li><Link href="/uk-yorkshire/heatons_coaches">Heatons Coaches</Link></li>
<li><Link href="/uk-yorkshire/stagecoach_merseyside">Stagecoach Merseyside and South Lancashire</Link></li>
<li><Link href="/uk-yorkshire/marsland_travel">Marsland Travel</Link></li>
<li><Link href="/uk-yorkshire/first_halifax">First Halifax</Link></li>
<li><Link href="/uk-yorkshire/stringers">Stringers</Link></li>
<li><Link href="/uk-yorkshire/north_lincolnshire">North Lincolnshire Council</Link></li>
<li><Link href="/uk-yorkshire/upper_wharfedale">Upper Wharfedale Venturer</Link></li>
<li><Link href="/uk-yorkshire/david_goodfellow">David Goodfellow Travel</Link></li>
<li><Link href="/uk-yorkshire/york_pullman">York Pullman</Link></li>
<li><Link href="/uk-yorkshire/station_coaches">Station Coaches</Link></li>
<li><Link href="/uk-yorkshire/tetley">Tetley</Link></li>
<li><Link href="/uk-yorkshire/aa_coach">A&A Coach Travel</Link></li>
<li><Link href="/uk-yorkshire/stagecoach_yorkshire">Stagecoach Yorkshire</Link></li>
<li><Link href="/uk-yorkshire/falcon_travel">Falcon Travel</Link></li>
<li><Link href="/uk-yorkshire/sweyne_coaches">Sweyne Coaches</Link></li>
<li><Link href="/uk-yorkshire/squarepeg">Squarepeg</Link></li>
<li><Link href="/uk-yorkshire/first_leeds">First Leeds</Link></li>
<li><Link href="/uk-yorkshire/hart">HART</Link></li>
<li><Link href="/uk-yorkshire/stevensons_travel">Stevensons Travel</Link></li>
<li><Link href="/uk-yorkshire/camerons_travel">Camerons Travel</Link></li>
<li><Link href="/uk-yorkshire/hornsbys_bus">Hornsbys Bus & Coach</Link></li>
<li><Link href="/uk-yorkshire/grayscroft_coaches">Grayscroft Coaches</Link></li>
<li><Link href="/uk-yorkshire/flyer">Flyer</Link></li>
<li><Link href="/uk-yorkshire/reliance_motor">Reliance Motor Services</Link></li>
<li><Link href="/uk-yorkshire/east_yorkshire">East Yorkshire</Link></li>
<li><Link href="/uk-yorkshire/jacksons">Jacksons of Silsden Ltd</Link></li>
<li><Link href="/uk-yorkshire/stotts_coaches">Stotts Coaches</Link></li>
<li><Link href="/uk-yorkshire/globe_coaches">Globe Coaches</Link></li>
<li><Link href="/uk-yorkshire/the_harrogate">The Harrogate Bus Company</Link></li>
<li><Link href="/uk-yorkshire/coastliner">Coastliner</Link></li>
<li><Link href="/uk-yorkshire/r_s">R & S Watersons</Link></li>
<li><Link href="/uk-yorkshire/thornes_independent">Thornes Independent Ltd</Link></li>
<li><Link href="/uk-yorkshire/acklams_coaches">Acklams Coaches</Link></li>
<li><Link href="/uk-yorkshire/arriva_north">Arriva North East</Link></li>
<li><Link href="/uk-yorkshire/generation_travel">Generation Travel</Link></li>
<li><Link href="/uk-yorkshire/first_south">First South Yorkshire</Link></li>
<li><Link href="/uk-yorkshire/steve_keats">Steve Keats of Sheffield</Link></li>
<li><Link href="/uk-yorkshire/ryedale_community">Ryedale Community Transport</Link></li>
<li><Link href="/uk-yorkshire/cawthornes_travel">Cawthornes Travel</Link></li>
<li><Link href="/uk-yorkshire/national_rail">National Rail</Link></li>
<li><Link href="/uk-yorkshire/wharfeconnections">Wharfeconnections</Link></li>
<li><Link href="/uk-yorkshire/peter_hodgson">Peter Hodgson Travel</Link></li>
<li><Link href="/uk-yorkshire/stagecoach_east">Stagecoach East Midlands</Link></li>
<li><Link href="/uk-yorkshire/nexus_move">Nexus Move</Link></li>
<li><Link href="/uk-yorkshire/kettlewells">Kettlewells</Link></li>
<li><Link href="/uk-yorkshire/road_runner">Road Runner Bus & Coach</Link></li>
<li><Link href="/uk-yorkshire/kirkby_lonsdale">Kirkby Lonsdale Coaches</Link></li>

  
  
  </ul>
<h1>Train Services</h1>
<ul className = "no-bullets">
  <li><Link href="/uk-yorkshire/tr_national_rail">National Rail</Link></li>
</ul>
<h1>Light Rail agencies</h1>
<ul className = "no-bullets">
 
<li><Link href="/uk-yorkshire/tr_stagecoach_supertram">Stagecoach Supertram</Link></li>

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
