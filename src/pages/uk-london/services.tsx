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
  
<li><Link href="/uk-london/bluebell_railway">Bluebell Railway</Link></li>
<li><Link href="/uk-london/stagecoach_south">Stagecoach South</Link></li>
<li><Link href="/uk-london/wealdlink_community">Wealdlink Community Transport</Link></li>
<li><Link href="/uk-london/united_minibuses">United Minibuses</Link></li>
<li><Link href="/uk-london/national_rail">National Rail</Link></li>
<li><Link href="/uk-london/flixbus">Flixbus</Link></li>
<li><Link href="/uk-london/brighton_hove">Brighton & Hove Bus</Link></li>
<li><Link href="/uk-london/swindons_bus">Swindons Bus Company</Link></li>
<li><Link href="/uk-london/uni-link">Uni-Link</Link></li>
<li><Link href="/uk-london/stephensons">Stephensons of Essex</Link></li>
<li><Link href="/uk-london/redwing_coaches">Redwing Coaches</Link></li>
<li><Link href="/uk-london/hadlow_rural">Hadlow Rural Community School</Link></li>
<li><Link href="/uk-london/centrebus">Centrebus</Link></li>
<li><Link href="/uk-london/ramsbury_community">Ramsbury Community Bus</Link></li>
<li><Link href="/uk-london/tk_travel">TK Travel</Link></li>
<li><Link href="/uk-london/overground">Overground</Link></li>
<li><Link href="/uk-london/flittabus">Flittabus</Link></li>
<li><Link href="/uk-london/rambler_coaches">Rambler Coaches</Link></li>
<li><Link href="/uk-london/first_last">First & Last Mile</Link></li>
<li><Link href="/uk-london/faringdon_community">Faringdon Community Bus</Link></li>
<li><Link href="/uk-london/spot_hire">Spot Hire</Link></li>
<li><Link href="/uk-london/bm_coaches">BM Coaches</Link></li>
<li><Link href="/uk-london/west_oxfordshire">West Oxfordshire Community Transport</Link></li>
<li><Link href="/uk-london/langston_tasker">Langston & Tasker</Link></li>
<li><Link href="/uk-london/road_runner">Road Runner Community Transport</Link></li>
<li><Link href="/uk-london/bear_buses">Bear Buses</Link></li>
<li><Link href="/uk-london/lucketts">Lucketts of Watford</Link></li>
<li><Link href="/uk-london/thames_valley">Thames Valley Buses</Link></li>
<li><Link href="/uk-london/seaford_district">Seaford & District</Link></li>
<li><Link href="/uk-london/coggeshall_community">Coggeshall Community Bus</Link></li>
<li><Link href="/uk-london/uno">Uno</Link></li>
<li><Link href="/uk-london/ipswich_buses">Ipswich Buses</Link></li>
<li><Link href="/uk-london/london_buses">London Buses</Link></li>
<li><Link href="/uk-london/ourbus_bartons">OurBus Bartons</Link></li>
<li><Link href="/uk-london/midhurst_community">Midhurst Community Bus</Link></li>
<li><Link href="/uk-london/brookline">Brookline</Link></li>
<li><Link href="/uk-london/chalkwell_garage">Chalkwell Garage & Coach Hire</Link></li>
<li><Link href="/uk-london/airport_bus">Airport Bus Express</Link></li>
<li><Link href="/uk-london/braintree_community">Braintree Community Transport</Link></li>
<li><Link href="/uk-london/chambers">Chambers</Link></li>
<li><Link href="/uk-london/diamond_bus">Diamond Bus South East</Link></li>
<li><Link href="/uk-london/metroline_travel">Metroline Travel</Link></li>
<li><Link href="/uk-london/safeguard_buses">Safeguard Buses</Link></li>
<li><Link href="/uk-london/compaid_trust">Compaid Trust</Link></li>
<li><Link href="/uk-london/national_express">National Express</Link></li>
<li><Link href="/uk-london/horseman_coaches">Horseman Coaches</Link></li>
<li><Link href="/uk-london/first_essex">First Essex</Link></li>
<li><Link href="/uk-london/kent_coach">Kent Coach Tours</Link></li>
<li><Link href="/uk-london/shipston_link">Shipston Link</Link></li>
<li><Link href="/uk-london/the_london">The London Bus Company</Link></li>
<li><Link href="/uk-london/romney_hythe">Romney Hythe & Dymchurch Light Railway</Link></li>
<li><Link href="/uk-london/cresta_coaches">Cresta Coaches</Link></li>
<li><Link href="/uk-london/tendring_community">Tendring Community Transport</Link></li>
<li><Link href="/uk-london/edward_thomas">Edward Thomas</Link></li>
<li><Link href="/uk-london/villager_community_bus_oxon">Villager Community Bus (Oxon)</Link></li>
<li><Link href="/uk-london/harwich_connexions">Harwich Connexions Transport</Link></li>
<li><Link href="/uk-london/rye_community">Rye Community Transport</Link></li>
<li><Link href="/uk-london/risborough_area">Risborough Area Community Bus</Link></li>
<li><Link href="/uk-london/hams_travel">Hams Travel</Link></li>
<li><Link href="/uk-london/britannia_bus">Britannia Bus</Link></li>
<li><Link href="/uk-london/carlone_buses">Carlone Buses</Link></li>
<li><Link href="/uk-london/xelabus">Xelabus</Link></li>
<li><Link href="/uk-london/arriva_kent">Arriva Kent and Surrey</Link></li>
<li><Link href="/uk-london/thames_travel">Thames Travel</Link></li>
<li><Link href="/uk-london/newbury_district">Newbury & District</Link></li>
<li><Link href="/uk-london/harpenden_connect">Harpenden Connect</Link></li>
<li><Link href="/uk-london/bexhill_community">Bexhill Community Bus</Link></li>
<li><Link href="/uk-london/cardinal_buses">Cardinal Buses</Link></li>
<li><Link href="/uk-london/grant_palmer">Grant Palmer</Link></li>
<li><Link href="/uk-london/red_rose">Red Rose Travel</Link></li>
<li><Link href="/uk-london/arrow_taxi">Arrow Taxi</Link></li>
<li><Link href="/uk-london/easybus">easyBus</Link></li>
<li><Link href="/uk-london/battle_area">Battle Area Community Transport</Link></li>
<li><Link href="/uk-london/waverley_hoppa">Waverley Hoppa Community Transport</Link></li>
<li><Link href="/uk-london/green_line">Green Line (operated by Arriva)</Link></li>
<li><Link href="/uk-london/stagecoach_oxfordshire">Stagecoach Oxfordshire</Link></li>
<li><Link href="/uk-london/richard_wellesley">Richard Wellesley Memorial Community Minibus</Link></li>
<li><Link href="/uk-london/hartley_wintney">Hartley Wintney Community Bus</Link></li>
<li><Link href="/uk-london/going_forward">Going Forward Buses</Link></li>
<li><Link href="/uk-london/epping_forest">Epping Forest Community Transport</Link></li>
<li><Link href="/uk-london/hedingham">Hedingham</Link></li>
<li><Link href="/uk-london/r_j">R & J Coaches</Link></li>
<li><Link href="/uk-london/star_travel">Star Travel</Link></li>
<li><Link href="/uk-london/seven_sisters">Seven Sisters Bus & Coach</Link></li>
<li><Link href="/uk-london/minibus_plus">Minibus Plus.com</Link></li>
<li><Link href="/uk-london/bishops_stortford">Bishops Stortford Community Transport</Link></li>
<li><Link href="/uk-london/luton_airport">Luton Airport Shuttle</Link></li>
<li><Link href="/uk-london/stagecoach_west">Stagecoach West</Link></li>
<li><Link href="/uk-london/reptons_coaches">Reptons Coaches</Link></li>
<li><Link href="/uk-london/meon_valley">Meon Valley Community Bus</Link></li>
<li><Link href="/uk-london/kidlington_assisted">Kidlington Assisted Transport CIC</Link></li>
<li><Link href="/uk-london/tfl_rail">TfL Rail</Link></li>
<li><Link href="/uk-london/winslow_district">Winslow & District Community Bus</Link></li>
<li><Link href="/uk-london/stagecoach_south_east">Stagecoach South East</Link></li>
<li><Link href="/uk-london/central_connect">Central Connect</Link></li>
<li><Link href="/uk-london/chatterbus">Chatterbus</Link></li>
<li><Link href="/uk-london/the_big">The Big Lemon</Link></li>
<li><Link href="/uk-london/fytbus">FYTbus</Link></li>
<li><Link href="/uk-london/flagfinders">Flagfinders</Link></li>
<li><Link href="/uk-london/crosskeys_coaches">Crosskeys Coaches</Link></li>
<li><Link href="/uk-london/farleigh_coaches">Farleigh Coaches</Link></li>
<li><Link href="/uk-london/star_cabs">Star Cabs</Link></li>
<li><Link href="/uk-london/white_bus">White Bus Services</Link></li>
<li><Link href="/uk-london/southern_vectis">Southern Vectis</Link></li>
<li><Link href="/uk-london/oxford_bus">Oxford Bus</Link></li>
<li><Link href="/uk-london/west_berkshire">West Berkshire Council Transport Services</Link></li>
<li><Link href="/uk-london/reading_buses">Reading Buses</Link></li>
<li><Link href="/uk-london/woking_community">Woking Community Transport</Link></li>
<li><Link href="/uk-london/community_transport">Community Transport for Lewes Area</Link></li>
<li><Link href="/uk-london/redline">Redline</Link></li>
<li><Link href="/uk-london/bayliss_executive">Bayliss Executive Travel</Link></li>
<li><Link href="/uk-london/stansted_airport">Stansted Airport Hotel Shuttle</Link></li>
<li><Link href="/uk-london/z_s">Z & S Transport</Link></li>
<li><Link href="/uk-london/asd_coaches">ASD Coaches</Link></li>
<li><Link href="/uk-london/compo">Compo</Link></li>
<li><Link href="/uk-london/vectare">Vectare</Link></li>
<li><Link href="/uk-london/harting_minibus">Harting Minibus CIC</Link></li>
<li><Link href="/uk-london/cruisers">Cruisers</Link></li>
<li><Link href="/uk-london/reading_railair">Reading RailAir</Link></li>
<li><Link href="/uk-london/hadleigh_community">Hadleigh Community Transport</Link></li>
<li><Link href="/uk-london/arriva_herts">Arriva Herts and Essex</Link></li>
<li><Link href="/uk-london/buses4u">Buses4U</Link></li>
<li><Link href="/uk-london/nu-venture">Nu-Venture</Link></li>
<li><Link href="/uk-london/sullivan_buses">Sullivan Buses</Link></li>
<li><Link href="/uk-london/pulhams_coaches">Pulhams Coaches</Link></li>
<li><Link href="/uk-london/arriva_beds">Arriva Beds and Bucks</Link></li>
<li><Link href="/uk-london/sussex_coaches">Sussex Coaches</Link></li>
<li><Link href="/uk-london/herberts_travel">Herberts Travel</Link></li>
<li><Link href="/uk-london/community_first">Community First Wessex</Link></li>
<li><Link href="/uk-london/south_beds">South Beds Dial-a-Ride</Link></li>
<li><Link href="/uk-london/broughton_mottisfont">Broughton & Mottisfont</Link></li>
<li><Link href="/uk-london/metrobus">Metrobus</Link></li>
<li><Link href="/uk-london/ensign_bus">Ensign Bus</Link></li>
<li><Link href="/uk-london/centaur_coaches">Centaur Coaches</Link></li>
<li><Link href="/uk-london/starline">Starline</Link></li>
<li><Link href="/uk-london/1st_bus">1st Bus Stop Ltd</Link></li>
<li><Link href="/uk-london/first_berkshire">First Berkshire & The Thames Valley</Link></li>
<li><Link href="/uk-london/go-coach">Go-Coach Hire</Link></li>
<li><Link href="/uk-london/stewarts_coaches">Stewarts Coaches</Link></li>
<li><Link href="/uk-london/southdown_psv">Southdown PSV</Link></li>
<li><Link href="/uk-london/stagecoach_east">Stagecoach East</Link></li>
<li><Link href="/uk-london/hampshire_community">Hampshire Community Transport</Link></li>
<li><Link href="/uk-london/travelmasters">Travelmasters</Link></li>
<li><Link href="/uk-london/regent_coaches">Regent Coaches</Link></li>
<li><Link href="/uk-london/grayline_coaches">Grayline Coaches</Link></li>
<li><Link href="/uk-london/falcon_coaches">Falcon Coaches</Link></li>
<li><Link href="/uk-london/amk">AMK</Link></li>
<li><Link href="/uk-london/panther_travel">Panther Travel</Link></li>
<li><Link href="/uk-london/new_bharat">New Bharat Coaches (Southall, London)</Link></li>
<li><Link href="/uk-london/fords_coaches">Fords Coaches</Link></li>
<li><Link href="/uk-london/morebus">morebus</Link></li>
<li><Link href="/uk-london/handcross_district">Handcross District Community Bus</Link></li>
<li><Link href="/uk-london/villager_community_bus">Villager Community Bus (Beds & Bucks)</Link></li>
<li><Link href="/uk-london/basingstoke_community">Basingstoke Community Transport</Link></li>
<li><Link href="/uk-london/richmonds_coaches">Richmonds Coaches</Link></li>
<li><Link href="/uk-london/red_eagle">Red Eagle</Link></li>
<li><Link href="/uk-london/essex_suffolk">Essex & Suffolk DaRT</Link></li>
<li><Link href="/uk-london/jw_lodge">JW Lodge & Sons</Link></li>
<li><Link href="/uk-london/wanderbus">Wanderbus</Link></li>
<li><Link href="/uk-london/landmark_coaches">Landmark Coaches</Link></li>
<li><Link href="/uk-london/brentwood_community">Brentwood Community Transport</Link></li>
<li><Link href="/uk-london/berrys_coaches">Berrys Coaches</Link></li>
<li><Link href="/uk-london/brian_jones">Brian Jones Coaches</Link></li>
<li><Link href="/uk-london/runnymede_community">Runnymede Community Transport</Link></li>
<li><Link href="/uk-london/first_portsmouth">First Portsmouth, Fareham & Gosport</Link></li>
<li><Link href="/uk-london/salisbury_reds">Salisbury Reds</Link></li>
<li><Link href="/uk-london/compass_travel">Compass Travel</Link></li>
<li><Link href="/uk-london/little_jim">Little Jim bus</Link></li>
<li><Link href="/uk-london/nibsbuses">NIBSbuses</Link></li>
<li><Link href="/uk-london/community_action">Community Action Dacorum</Link></li>
<li><Link href="/uk-london/cuckmere_buses">Cuckmere Buses</Link></li>
<li><Link href="/uk-london/carousel_buses">Carousel Buses</Link></li>
<li><Link href="/uk-london/redroute_buses">Redroute Buses</Link></li>
<li><Link href="/uk-london/shires_passenger">Shires Passenger Transport</Link></li>
<li><Link href="/uk-london/ivel_sprinter">Ivel Sprinter</Link></li>
<li><Link href="/uk-london/beestons">Beestons</Link></li>
<li><Link href="/uk-london/vale_travel">Vale Travel</Link></li>
<li><Link href="/uk-london/bluestar">Bluestar</Link></li>
<li><Link href="/uk-london/autocar_bus">Autocar Bus & Coach Services</Link></li>
<li><Link href="/uk-london/amberley_slindon">Amberley & Slindon Community Bus</Link></li>
<li><Link href="/uk-london/basildon_district">Basildon District Volunteer Carers</Link></li>
<li><Link href="/uk-london/selsey_community">Selsey Community Bus</Link></li>

  
  
  </ul>
<h1>Train Services</h1>
<ul className = "no-bullets">
  <li><Link href="/uk-london/tr_transport_for_london">Transport for London</Link></li>
  <li><Link href="/uk-london/tr_national_rail">National Rail</Link></li>
</ul>
<h1>Tube Services</h1>
<ul className = "no-bullets">
  <li><Link href="/uk-london/tr_tube">Tube</Link></li>

</ul>
<h1>Tramlink Services</h1>
<ul className = "no-bullets">

  <li><Link href="/uk-london/tr_london_tramlink">London Tramlink</Link></li>
 </ul>
 <h1>River Bus Services</h1>
<ul className = "no-bullets">
<li><Link href="/uk-london/tr_harwich_harbour">Harwich Harbour Ferry</Link></li>
<li><Link href="/uk-london/tr_d_p">D & P Boat Hire</Link></li>
<li><Link href="/uk-london/tr_gosport-portsmouth">Gosport-Portsmouth Ferry</Link></li>
<li><Link href="/uk-london/tr_white_horse">White Horse Ferries</Link></li>
<li><Link href="/uk-london/tr_wightlink">WightLink</Link></li>
<li><Link href="/uk-london/tr_red_funnel">Red Funnel</Link></li>
<li><Link href="/uk-london/tr_cowes_ferry">Cowes Ferry</Link></li>
<li><Link href="/uk-london/tr_london_river">London River Services</Link></li>
<li><Link href="/uk-london/tr_hayling_ferry">Hayling Ferry Limited</Link></li>
<li><Link href="/uk-london/tr_hovertravel">Hovertravel</Link></li>

 </ul>
 <h1>DLR Services</h1>
<ul className = "no-bullets">

  <li><Link href="/uk-london/tr_transport_for_london">Transport for London</Link></li>
  <li><Link href="/uk-london/tr_ifs_cloud">IFS Cloud Cable Car</Link></li>

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
