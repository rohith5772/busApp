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
  
 
<li><Link href="/uk-southwest/south_west">South West Coaches</Link></li>
<li><Link href="/uk-southwest/stagecoach_south">Stagecoach South</Link></li>
<li><Link href="/uk-southwest/ct_coaches">CT Coaches</Link></li>
<li><Link href="/uk-southwest/bakers_dolphin">Bakers Dolphin</Link></li>
<li><Link href="/uk-southwest/oakleys_coaches">Oakleys Coaches</Link></li>
<li><Link href="/uk-southwest/discover_dorset">Discover Dorset Tours</Link></li>
<li><Link href="/uk-southwest/dartline_coaches">Dartline Coaches</Link></li>
<li><Link href="/uk-southwest/west_berkshire">West Berkshire Council Transport Services</Link></li>
<li><Link href="/uk-southwest/saltash_red">Saltash Red Bus</Link></li>
<li><Link href="/uk-southwest/three_villages">Three Villages MiniBus</Link></li>
<li><Link href="/uk-southwest/connect2wiltshire">Connect2Wiltshire</Link></li>
<li><Link href="/uk-southwest/torbay_community">Torbay Community Development Trust</Link></li>
<li><Link href="/uk-southwest/morebus">morebus</Link></li>
<li><Link href="/uk-southwest/phil_anslow">Phil Anslow Travel</Link></li>
<li><Link href="/uk-southwest/ots">OTS</Link></li>
<li><Link href="/uk-southwest/country_bus">Country Bus</Link></li>
<li><Link href="/uk-southwest/go_cornwall">Go Cornwall Bus</Link></li>
<li><Link href="/uk-southwest/john_dix">John Dix Travel</Link></li>
<li><Link href="/uk-southwest/taw_torridge">Taw & Torridge</Link></li>
<li><Link href="/uk-southwest/coachstyle">Coachstyle</Link></li>
<li><Link href="/uk-southwest/first_wessex">First Wessex, Dorset & South Somerset</Link></li>
<li><Link href="/uk-southwest/damory_coaches">Damory Coaches</Link></li>
<li><Link href="/uk-southwest/robert_eugene">Robert Eugene Dix</Link></li>
<li><Link href="/uk-southwest/villager_community">Villager Community Bus (Oxon)</Link></li>
<li><Link href="/uk-southwest/hopleys_coaches">Hopleys Coaches</Link></li>
<li><Link href="/uk-southwest/gorran_district">Gorran & District Community Bus</Link></li>
<li><Link href="/uk-southwest/ramsbury_community">Ramsbury Community Bus</Link></li>
<li><Link href="/uk-southwest/pulhams_coaches">Pulhams Coaches</Link></li>
<li><Link href="/uk-southwest/plymouth_citybus">Plymouth Citybus</Link></li>
<li><Link href="/uk-southwest/tally_ho">Tally Ho!</Link></li>
<li><Link href="/uk-southwest/eurocoaches">Eurocoaches</Link></li>
<li><Link href="/uk-southwest/somerset_council">Somerset Council</Link></li>
<li><Link href="/uk-southwest/beaminster_town">Beaminster Town Council</Link></li>
<li><Link href="/uk-southwest/newport_bus">Newport Bus</Link></li>
<li><Link href="/uk-southwest/urchfont_community">Urchfont Community Bus</Link></li>
<li><Link href="/uk-southwest/first_kernow">First Kernow</Link></li>
<li><Link href="/uk-southwest/beeline_coaches">Beeline Coaches</Link></li>
<li><Link href="/uk-southwest/south_somerset">South Somerset Community Transport</Link></li>
<li><Link href="/uk-southwest/forest_community">Forest Community Transport</Link></li>
<li><Link href="/uk-southwest/torbay_buses">Torbay Buses</Link></li>
<li><Link href="/uk-southwest/taylors_travel">Taylors Travel</Link></li>
<li><Link href="/uk-southwest/grindles_coaches">Grindles Coaches</Link></li>
<li><Link href="/uk-southwest/stagecoach_oxfordshire">Stagecoach Oxfordshire</Link></li>
<li><Link href="/uk-southwest/abus">ABUS</Link></li>
<li><Link href="/uk-southwest/shipston_link">Shipston Link</Link></li>
<li><Link href="/uk-southwest/swanbrook_coaches">Swanbrook Coaches</Link></li>
<li><Link href="/uk-southwest/bluestar">Bluestar</Link></li>
<li><Link href="/uk-southwest/dorset_community">Dorset Community Transport</Link></li>
<li><Link href="/uk-southwest/primrose_coaches">Primrose Coaches</Link></li>
<li><Link href="/uk-southwest/filers_travel">Filers Travel</Link></li>
<li><Link href="/uk-southwest/cotswold_green">Cotswold Green</Link></li>
<li><Link href="/uk-southwest/roselyn_coaches">Roselyn Coaches</Link></li>
<li><Link href="/uk-southwest/w_ridler">W Ridler & Sons</Link></li>
<li><Link href="/uk-southwest/transpora_bus">Transpora Bus</Link></li>
<li><Link href="/uk-southwest/tavistock_community">Tavistock Community Transport</Link></li>
<li><Link href="/uk-southwest/atwest">Atwest</Link></li>
<li><Link href="/uk-southwest/redwoods_travel">Redwoods Travel</Link></li>
<li><Link href="/uk-southwest/hampshire_community">Hampshire Community Transport</Link></li>
<li><Link href="/uk-southwest/newton_abbot">Newton Abbot Community Transport</Link></li>
<li><Link href="/uk-southwest/the_seend">The Seend Shuttle</Link></li>
<li><Link href="/uk-southwest/stagecoach_west">Stagecoach West</Link></li>
<li><Link href="/uk-southwest/4k_travel">4K Travel</Link></li>
<li><Link href="/uk-southwest/independent_coach">Independent Coach Company</Link></li>
<li><Link href="/uk-southwest/st_ives">St Ives Minibus Services</Link></li>
<li><Link href="/uk-southwest/hatch_green">Hatch Green Coaches</Link></li>
<li><Link href="/uk-southwest/the_big">The Big Lemon</Link></li>
<li><Link href="/uk-southwest/isle_of_wedmore">Isle of Wedmore RT Assoc.</Link></li>
<li><Link href="/uk-southwest/greenslades_tours">Greenslades Tours</Link></li>
<li><Link href="/uk-southwest/national_rail">National Rail</Link></li>
<li><Link href="/uk-southwest/salisbury_reds">Salisbury Reds</Link></li>
<li><Link href="/uk-southwest/f_r">F R Willetts</Link></li>
<li><Link href="/uk-southwest/berrys_coaches">Berrys Coaches</Link></li>
<li><Link href="/uk-southwest/newent_shuttle">Newent Shuttle</Link></li>
<li><Link href="/uk-southwest/logan_rock">Logan Rock Cars</Link></li>
<li><Link href="/uk-southwest/yeos_contracts">Yeos Contracts</Link></li>
<li><Link href="/uk-southwest/ebley_coaches">Ebley Coaches</Link></li>
<li><Link href="/uk-southwest/fromebus">FromeBus</Link></li>
<li><Link href="/uk-southwest/royal_buses">Royal Buses</Link></li>
<li><Link href="/uk-southwest/dawlish_community">Dawlish Community Transport</Link></li>
<li><Link href="/uk-southwest/first_bristol">First Bristol, Bath & the West</Link></li>
<li><Link href="/uk-southwest/md_coaches">MD Coaches</Link></li>
<li><Link href="/uk-southwest/community_transport">Community Transport South Wiltshire</Link></li>
<li><Link href="/uk-southwest/isle_valley">Isle Valley Transport</Link></li>
<li><Link href="/uk-southwest/exe_valley">Exe Valley and Community Bus</Link></li>
<li><Link href="/uk-southwest/totness_community">Totness Community Bus</Link></li>
<li><Link href="/uk-southwest/alpha_coaches">Alpha Coaches</Link></li>
<li><Link href="/uk-southwest/astra_coach">Astra Coach Travel</Link></li>
<li><Link href="/uk-southwest/hedgehog_community">Hedgehog Community Bus</Link></li>
<li><Link href="/uk-southwest/travel_cornwall">Travel Cornwall</Link></li>
<li><Link href="/uk-southwest/axe_valley">Axe Valley Mini-Travel</Link></li>
<li><Link href="/uk-southwest/cheltenham_community">Cheltenham Community Transport</Link></li>
<li><Link href="/uk-southwest/bath_bus">Bath Bus Company</Link></li>
<li><Link href="/uk-southwest/libra_travel">Libra Travel</Link></li>
<li><Link href="/uk-southwest/swindons_bus">Swindons Bus Company</Link></li>
<li><Link href="/uk-southwest/k_b">K B Coaches</Link></li>
<li><Link href="/uk-southwest/faresaver">Faresaver</Link></li>
<li><Link href="/uk-southwest/bennetts">Bennetts</Link></li>
<li><Link href="/uk-southwest/marchants_coaches">Marchants Coaches</Link></li>
<li><Link href="/uk-southwest/stagecoach_south">Stagecoach South West</Link></li>
<li><Link href="/uk-southwest/mendip_community">Mendip Community Transport</Link></li>
<li><Link href="/uk-southwest/first_buses">First Buses of Somerset</Link></li>

  
  
  </ul>
<h1>Train Services</h1>
<ul className = "no-bullets">
  <li><Link href="/uk-southwest/tr_swanage_railway">Swanage Railway Company</Link></li>
  <li><Link href="/uk-southwest/tr_national_rail">National Rail</Link></li>
  <li><Link href="/uk-southwest/tr_river_link">River Link</Link></li></ul>

<h1>Ferry agencies</h1>
<ul className = "no-bullets">
  <li><Link href="/uk-southwest/tr_padstow_harbour">Padstow Harbour Commissioners</Link></li>
  <li><Link href="/uk-southwest/tr_isles_of_scilly">Isles of Scilly Steamship Co</Link></li>
  <li><Link href="/uk-southwest/tr_salcombe_ferry">Salcombe Ferry</Link></li>
  <li><Link href="/uk-southwest/tr_dartmouth_higher">Dartmouth Higher Ferry</Link></li>
  <li><Link href="/uk-southwest/tr_tamar_bridge">Tamar Bridge & Torpoint Ferry Joint Committee</Link></li>
  <li><Link href="/uk-southwest/tr_flushing_ferry">Flushing Ferry</Link></li>
  <li><Link href="/uk-southwest/tr_plymouth_boat">Plymouth Boat Trips</Link></li>
  <li><Link href="/uk-southwest/tr_mountbatten_water">Mountbatten Water Taxis</Link></li>
  <li><Link href="/uk-southwest/tr_river_link">River Link</Link></li>
  <li><Link href="/uk-southwest/tr_polruan_passenger">Polruan Passenger Ferry, Bodinnick Vehicle Ferry</Link></li>
  <li><Link href="/uk-southwest/tr_sandbanks_ferry">Sandbanks Ferry</Link></li>
  <li><Link href="/uk-southwest/tr_polruan_ferry">Polruan Ferry Co Ltd</Link></li>
  <li><Link href="/uk-southwest/tr_mevagissey_ferry">Mevagissey Ferry</Link></li>
  <li><Link href="/uk-southwest/tr_bristol_ferry">Bristol Ferry Boat Company</Link></li>
  <li><Link href="/uk-southwest/tr_st_mawes">St Mawes Ferry</Link></li>
  <li><Link href="/uk-southwest/tr_fal_river_links">Fal River Links</Link></li>
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
