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
  
  <li><Link href="/uk-scotland/bus_na">Bus Na Comhairle</Link></li>
  <li><Link href="/uk-scotland/isle_of_hoy">Isle of Hoy Development Trust</Link></li>
  <li><Link href="/uk-scotland/grenitote_travel">Grenitote Travel</Link></li>
  <li><Link href="/uk-scotland/moffat_williamson">Moffat & Williamson</Link></li>
  <li><Link href="/uk-scotland/andersons_of_langholm">Andersons of Langholm</Link></li>
  <li><Link href="/uk-scotland/j_a_g_d">J A & G D Nicolson</Link></li>
  <li><Link href="/uk-scotland/murdo_maciver">Murdo MacIver</Link></li>
  <li><Link href="/uk-scotland/united_coaches">United Coaches</Link></li>
  <li><Link href="/uk-scotland/j_p">J P Minibus</Link></li>
  <li><Link href="/uk-scotland/glen_valley">Glen Valley Tours</Link></li>
  <li><Link href="/uk-scotland/r_g">R G Jamieson & Son</Link></li>
  <li><Link href="/uk-scotland/travel_wisharts">Travel Wisharts</Link></li>
  <li><Link href="/uk-scotland/mcgills_bus">McGills Bus Service</Link></li>
  <li><Link href="/uk-scotland/lochcarron_garage">Lochcarron Garage</Link></li>
  <li><Link href="/uk-scotland/stagecoach_west">Stagecoach West Scotland</Link></li>
  <li><Link href="/uk-scotland/wilsons_of_rhu">Wilsons of Rhu</Link></li>
  <li><Link href="/uk-scotland/dochertys_midland">Dochertys Midland Coaches</Link></li>
  <li><Link href="/uk-scotland/glasgow_citybus">Glasgow Citybus</Link></li>
  <li><Link href="/uk-scotland/john_kennedy">John Kennedy</Link></li>
  <li><Link href="/uk-scotland/arg_travel">ARG Travel</Link></li>
  <li><Link href="/uk-scotland/dodds_of_troon">Dodds of Troon</Link></li>
  <li><Link href="/uk-scotland/flixbus">Flixbus</Link></li>
  <li><Link href="/uk-scotland/bay_travel">Bay Travel</Link></li>
  <li><Link href="/uk-scotland/john_ferguson">John Ferguson Minibus Hirer</Link></li>
  <li><Link href="/uk-scotland/edinburgh_coach">Edinburgh Coach Lines</Link></li>
  <li><Link href="/uk-scotland/burnbrae_garage">Burnbrae Garage</Link></li>
  <li><Link href="/uk-scotland/maynes_coaches">Maynes Coaches</Link></li>
  <li><Link href="/uk-scotland/ak_transport">AK Transport</Link></li>
  <li><Link href="/uk-scotland/taxi_service">Taxi Service</Link></li>
  <li><Link href="/uk-scotland/stagecoach_highlands">Stagecoach Highlands</Link></li>
  <li><Link href="/uk-scotland/dunnetts_transport">Dunnetts Transport</Link></li>
  <li><Link href="/uk-scotland/mccolls_travel">McColls Travel</Link></li>
  <li><Link href="/uk-scotland/d_a_a_j">D A & A J MacLean</Link></li>
  <li><Link href="/uk-scotland/midland_bluebird">Midland Bluebird</Link></li>
  <li><Link href="/uk-scotland/houstons_minicoaches">Houstons Minicoaches</Link></li>
  <li><Link href="/uk-scotland/strathclyde_bus">Strathclyde Bus</Link></li>
  <li><Link href="/uk-scotland/robinsons_transport">Robinsons Transport</Link></li>
  <li><Link href="/uk-scotland/west_coast">West Coast Motors</Link></li>
  <li><Link href="/uk-scotland/d_e">D & E Coaches</Link></li>
  <li><Link href="/uk-scotland/jmb_travel">JMB Travel</Link></li>
  <li><Link href="/uk-scotland/scottish_citylink">Scottish Citylink & Ulsterbus</Link></li>
  <li><Link href="/uk-scotland/macleods_coaches">MacLeods Coaches</Link></li>
  <li><Link href="/uk-scotland/first_aberdeen">First Aberdeen</Link></li>
  <li><Link href="/uk-scotland/stagecoach_bluebird">Stagecoach Bluebird</Link></li>
  <li><Link href="/uk-scotland/mackies_coaches">Mackies Coaches</Link></li>
  <li><Link href="/uk-scotland/festival_travel">Festival Travel</Link></li>
  <li><Link href="/uk-scotland/stuarts_coaches">Stuarts Coaches</Link></li>
  <li><Link href="/uk-scotland/elizabeth_yule">Elizabeth Yule</Link></li>
  <li><Link href="/uk-scotland/canavan_travel">Canavan Travel</Link></li>
  <li><Link href="/uk-scotland/prentice_coaches">Prentice Coaches</Link></li>
  <li><Link href="/uk-scotland/climate_action">Climate Action Strathaven</Link></li>
  <li><Link href="/uk-scotland/telfords_coaches">Telfords Coaches</Link></li>
  <li><Link href="/uk-scotland/peter_maclennan">Peter MacLennan</Link></li>
  <li><Link href="/uk-scotland/lochs_motor">Lochs Motor Transport</Link></li>
  <li><Link href="/uk-scotland/dgc_buses">DGC Buses</Link></li>
  <li><Link href="/uk-scotland/e_m">E & M Horsburgh</Link></li>
  <li><Link href="/uk-scotland/hcl">HcL</Link></li>
  <li><Link href="/uk-scotland/hunter_cabs">Hunter Cabs & Mini Buses</Link></li>
  <li><Link href="/uk-scotland/merlin_travel">Merlin Travel</Link></li>
  <li><Link href="/uk-scotland/prentice_westwood">Prentice Westwood</Link></li>
  <li><Link href="/uk-scotland/w_brownrigg">W Brownrigg</Link></li>
  <li><Link href="/uk-scotland/garelochhead_minibuses">Garelochhead Minibuses & Coaches</Link></li>
  <li><Link href="/uk-scotland/lochaber_action">Lochaber Action on Disability</Link></li>
  <li><Link href="/uk-scotland/shuttle_buses">Shuttle Buses</Link></li>
  <li><Link href="/uk-scotland/wmv_motor_hirer">WMV Motor Hirer</Link></li>
  <li><Link href="/uk-scotland/key_coaches">Key Coaches</Link></li>
  <li><Link href="/uk-scotland/hebridean_minibus">Hebridean MiniBus Service</Link></li>
  <li><Link href="/uk-scotland/shiel_buses">Shiel Buses</Link></li>
  <li><Link href="/uk-scotland/megabus">Megabus</Link></li>
  <li><Link href="/uk-scotland/hebridean_transport">Hebridean Transport</Link></li>
  <li><Link href="/uk-scotland/aarons_of_wick">Aarons of Wick</Link></li>
  <li><Link href="/uk-scotland/r_robertson">R Robertson & Son</Link></li>
  <li><Link href="/uk-scotland/wigtownshire_community">Wigtownshire Community Transport</Link></li>
  <li><Link href="/uk-scotland/eve_coaches">Eve Coaches</Link></li>
  <li><Link href="/uk-scotland/north_area">North Area Transport Association</Link></li>
  <li><Link href="/uk-scotland/east_coast">East Coast Buses</Link></li>
  <li><Link href="/uk-scotland/galson_motors">Galson Motors</Link></li>
  <li><Link href="/uk-scotland/moray_council">Moray Council</Link></li>
  <li><Link href="/uk-scotland/johnson_transport">Johnson Transport</Link></li>
  <li><Link href="/uk-scotland/martins_car">Martins Car Hire</Link></li>
  <li><Link href="/uk-scotland/xplore_dundee">Xplore Dundee</Link></li>
  <li><Link href="/uk-scotland/county_travel">County Travel</Link></li>
  <li><Link href="/uk-scotland/scottish_citylink">Scottish Citylink/Megabus jointly operated</Link></li>
  <li><Link href="/uk-scotland/south_harris">South Harris Coaches</Link></li>
  <li><Link href="/uk-scotland/wastbus">Wastbus</Link></li>
  <li><Link href="/uk-scotland/d_a">D A Travel</Link></li>
  <li><Link href="/uk-scotland/pvt_transfer">PVT Transfer</Link></li>
  <li><Link href="/uk-scotland/kingshouse_travel">Kingshouse Travel</Link></li>
  <li><Link href="/uk-scotland/colchri_coaches">Colchri Coaches</Link></li>
  <li><Link href="/uk-scotland/sweeneys_garage">Sweeneys Garage</Link></li>
  <li><Link href="/uk-scotland/gd_coaches">GD Coaches</Link></li>
  <li><Link href="/uk-scotland/hunters_executive">Hunters Executive Coaches</Link></li>
  <li><Link href="/uk-scotland/watermill_coaches">Watermill Coaches</Link></li>
  <li><Link href="/uk-scotland/avondale_coaches">Avondale Coaches</Link></li>
  <li><Link href="/uk-scotland/hamish_gordon">Hamish Gordon Coaches</Link></li>
  <li><Link href="/uk-scotland/westerbus">Westerbus</Link></li>
  <li><Link href="/uk-scotland/highland_council">Highland Council</Link></li>
  <li><Link href="/uk-scotland/jonathan_boyd">Jonathan Boyd</Link></li>
  <li><Link href="/uk-scotland/wilsons_buses">Wilsons Buses</Link></li>
  <li><Link href="/uk-scotland/dunns_coaches">Dunns Coaches</Link></li>
  <li><Link href="/uk-scotland/ace_mini_coaches">Ace Mini Coaches</Link></li>
  <li><Link href="/uk-scotland/george_rapson">George Rapson Travel</Link></li>
  <li><Link href="/uk-scotland/fishers_tours">Fishers Tours</Link></li>
  <li><Link href="/uk-scotland/a_macdonald">A MacDonald</Link></li>
  <li><Link href="/uk-scotland/community_transport">Community Transport Glasgow</Link></li>
  <li><Link href="/uk-scotland/peter_hogg">Peter Hogg of Jedburgh</Link></li>
  <li><Link href="/uk-scotland/craigs_of_cumbernauld">Craigs of Cumbernauld</Link></li>
  <li><Link href="/uk-scotland/mccalls_coaches">McCalls Coaches</Link></li>
  <li><Link href="/uk-scotland/short_travel">Short Travel</Link></li>
  <li><Link href="/uk-scotland/the_durness">The Durness Bus</Link></li>
  <li><Link href="/uk-scotland/whites_coaches">Whites Coaches (Shetland)</Link></li>
  <li><Link href="/uk-scotland/national_rail">National Rail</Link></li>
  <li><Link href="/uk-scotland/andrews">Andrews</Link></li>
  <li><Link href="/uk-scotland/sd_travel">SD Travel</Link></li>
  <li><Link href="/uk-scotland/a1_coaches">A1 Coaches</Link></li>
  <li><Link href="/uk-scotland/d_m_k">D M K Motors</Link></li>
  <li><Link href="/uk-scotland/lothian_country">Lothian Country Buses</Link></li>
  <li><Link href="/uk-scotland/stagecoach_east">Stagecoach East Scotland</Link></li>
  <li><Link href="/uk-scotland/lothian_buses">Lothian Buses</Link></li>
  <li><Link href="/uk-scotland/scottish_citylink">Scottish Citylink</Link></li>
  <li><Link href="/uk-scotland/j_d_s">J & D S Halcrow</Link></li>
  <li><Link href="/uk-scotland/eastern_scottish">Eastern Scottish</Link></li>
  <li><Link href="/uk-scotland/millport_motors">Millport Motors</Link></li>
  <li><Link href="/uk-scotland/k_and_k">K and K Transport</Link></li>
  <li><Link href="/uk-scotland/mcnairn_coaches">McNairn Coaches</Link></li>
  <li><Link href="/uk-scotland/islay_coaches">Islay Coaches</Link></li>
  <li><Link href="/uk-scotland/tranport_for_tongue">Tranport for Tongue</Link></li>
  <li><Link href="/uk-scotland/wilma_ann">Wilma Ann Nicolson</Link></li>
  <li><Link href="/uk-scotland/ember">Ember</Link></li>
  <li><Link href="/uk-scotland/smith_sons">Smith & Sons</Link></li>
  <li><Link href="/uk-scotland/mcculloch_coaches">McCulloch Coaches</Link></li>
  <li><Link href="/uk-scotland/hobson_travel">Hobson Travel</Link></li>
  <li><Link href="/uk-scotland/bains_coaches">Bains Coaches</Link></li>
  <li><Link href="/uk-scotland/whitelaw_coaches">Whitelaw Coaches</Link></li>
  <li><Link href="/uk-scotland/scottish_borders">Scottish Borders Council</Link></li>
  <li><Link href="/uk-scotland/lothian_community">Lothian Community Transport</Link></li>
  <li><Link href="/uk-scotland/borders_buses">Borders Buses</Link></li>
  <li><Link href="/uk-scotland/glenfarg_community">Glenfarg Community Transport Group</Link></li>
  <li><Link href="/uk-scotland/alasdair_macdonald">Alasdair Macdonald</Link></li>
  <li><Link href="/uk-scotland/first_greater">First Greater Glasgow</Link></li>
  <li><Link href="/uk-scotland/deveron_coaches">Deveron Coaches</Link></li>
  <li><Link href="/uk-scotland/south_ayrshire">South Ayrshire Community Transport</Link></li>
  <li><Link href="/uk-scotland/travelsure">Travelsure</Link></li>

  
  
  </ul>
<h1>Train Services</h1>
<ul className = "no-bullets">
  <li><Link href="/uk-cumbria/tr_national_rail">National Rail</Link></li>
</ul>
<h1>Light Rail agencies</h1>
<ul className = "no-bullets">
  <li><Link href="/uk-scotland/tr_strathspey_steam">Strathspey Steam Railway</Link></li>
  <li><Link href="/uk-scotland/tr_spt_subway">SPT Subway</Link></li>
  <li><Link href="/uk-scotland/tr_keith">Keith and Dufftown Railway</Link></li>
  <li><Link href="/uk-scotland/tr_edinburgh_trams">Edinburgh Trams</Link></li>
  <li><Link href="/uk-scotland/tr_leadhills">Leadhills and Wanlockhead Railway</Link></li>

</ul>
<h1>Ferry agencies</h1>
<ul className = "no-bullets">

  <li><Link href="/uk-scotland/tr_shetland_ferries">Shetland Ferries</Link></li>
  <li><Link href="/uk-scotland/tr_ardlui_hotel">Ardlui Hotel</Link></li>
  <li><Link href="/uk-scotland/tr_argyll_bute">Argyll & Bute Council Ferries</Link></li>
  <li><Link href="/uk-scotland/tr_sweeneys_cruises">Sweeneys Cruises</Link></li>
  <li><Link href="/uk-scotland/tr_arisaig_marine">Arisaig Marine</Link></li>
  <li><Link href="/uk-scotland/tr_historic_scotland">Historic Scotland</Link></li>
  <li><Link href="/uk-scotland/tr_western_ferries">Western Ferries</Link></li>
  <li><Link href="/uk-scotland/tr_scoraig_ferry">Scoraig Ferry</Link></li>
  <li><Link href="/uk-scotland/tr_caledonian_macbrayne">Caledonian MacBrayne</Link></li>
  <li><Link href="/uk-scotland/tr_steam_ship">Steam Ship Sir Walter Scott</Link></li>
  <li><Link href="/uk-scotland/tr_clydelink">Clydelink</Link></li>
  <li><Link href="/uk-scotland/tr_skye_ferry">Skye Ferry Community Interest Company</Link></li>
  <li><Link href="/uk-scotland/tr_highland_ferries">Highland Ferries</Link></li>
  <li><Link href="/uk-scotland/tr_northlink_ferries">Northlink Ferries</Link></li>
  <li><Link href="/uk-scotland/tr_highland_council">Highland Council</Link></li>
  <li><Link href="/uk-scotland/tr_bk_marine">BK Marine</Link></li>
  <li><Link href="/uk-scotland/tr_orkney_ferries">Orkney Ferries</Link></li>
  <li><Link href="/uk-scotland/tr_islay_sea">Islay Sea Safari</Link></li>
  <li><Link href="/uk-scotland/tr_pentland_ferries">Pentland Ferries</Link></li>
  <li><Link href="/uk-scotland/tr_cruise_loch">Cruise Loch Lomond</Link></li>
  <li><Link href="/uk-scotland/tr_ulva_ferry">Ulva Ferry</Link></li>
  <li><Link href="/uk-scotland/tr_john">John O Groats Ferries</Link></li>
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
