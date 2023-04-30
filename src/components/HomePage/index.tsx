import React, { useRef } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';

import { useEffect,useState } from 'react'
//import './HomePage.css';
import axios from "axios";
import hydImg from './hyd-map.png';
import Select from "react-select";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
//map
//from,to text fields
//search button

//farecomparision button
//farecomparision page


const HomePage = () => {
  const [data, setData] = useState(null);
  const [startval, setstartval] = useState("");
  const [endval, setendval] = useState("");
  var ref = useRef(null);
  //const myElement = useRef(null);
  //const router = useNavigate();
  const router = useRouter();
  const optionList = [
    { value: "Nagole", label: "Nagole" },
    { value: "Uppal", label: "Uppal" },
    { value: "Ameerpet", label: "Ameerpet" },
    { value: "Raidurg", label: "Raidurg" },
    { value: "Hyd", label: "Hyd" }
  ];
  const [selectedOptionsFrom, setSelectedOptionsFrom] = useState<undefined | { value: string; label: string }>(undefined);
  const [selectedOptionsTo, setSelectedOptionsTo] = useState<undefined | { value: string; label: string }>(undefined);
 
  function handleSelectTo(data:any) {
    setSelectedOptionsTo(data);
    console.log(data['value']);
  }
  function handleSelectFrom(data:any) {
    setSelectedOptionsFrom(data);
    console.log((data['value']));
  }
  function submitfn(event: any) {
    event.preventDefault();
    console.log(event+"from");
    console.log(selectedOptionsFrom?.label,selectedOptionsTo?.label);
    fetchData();
  }
  useEffect(() => {
      
    const currentUrl = window.location.href;
    console.log(currentUrl);
    const hasWord = currentUrl.includes('BusTimings');

    console.log(hasWord+"hasWord");
    document.getElementsByClassName('commonclass');
     for (let i = 0; i < document.getElementsByClassName('commonclass').length; i++) {
      console.log(document.getElementsByClassName('commonclass')[i].className = "commonclass");
    }

    if(currentUrl === 'http://localhost:3000/' || currentUrl === 'http://localhost:3000'|| currentUrl === 'http://localhost:3000/#' || currentUrl === 'https://hyderabad-city-mapper.web.app/' || currentUrl === 'https://hyderabad-city-mapper.web.app/#' || currentUrl === 'https://hyderabad-city-mapper.web.app' || currentUrl === 'https://www.cityroutemapper.com' || currentUrl === 'https://www.cityroutemapper.com/' || currentUrl === 'https://www.cityroutemapper.com/#' || currentUrl === 'https://cityroutemapper.com' || currentUrl === 'https://cityroutemapper.com/' || currentUrl === 'https://cityroutemapper.com/#'){
      var val = (document.getElementById("home") as HTMLInputElement);
      val.className+=" active";
    }
  }, []);
  function myFunction() {
    var x = (document.getElementById("myTopnav") as HTMLInputElement);
       
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  }
 
  async function fetchData() {
    if (selectedOptionsFrom?.label && selectedOptionsTo?.label) {
      console.log(selectedOptionsFrom.label);
      console.log(selectedOptionsTo.label);
    } else {
      alert("  endval and startval Cannnot be blank");
      return;
    }
    /*const response = await fetch("http://127.0.0.1:5000/hello?from="+selectedOptionsFrom.label+"&to="+selectedOptionsTo.label, {
      mode: 'cors'
    });
    const json = await response.json();
    setData(json);
    console.log(json);
    const jsonString = encodeURIComponent(JSON.stringify(json));
    */
    //router('/listing',{state:json});
    //router.push(`/listingpage?json=${jsonString}`);
    
    router.push({
      pathname: '/listingpage',
      query: { /*state: JSON.stringify(json),*/From:selectedOptionsFrom.label ,To:selectedOptionsTo.label}
    });
  }
  return (
    <div>
              <h1 className="h1class"><a href="" title="Hyderabad Bus Routes " target="_self">Hyderabad City Bus Routes</a></h1>

        <div id="map"></div>
        <div className="topnav" id="myTopnav">
   <Link id = "home" href="/" className="commonclass">Home</Link>
  <a id = "bustimings" className="commonclass" href="bustimings">Search Bus</a>
  <a id = "contact" className="commonclass" href="contact">Contact</a>
  <a id = "about" className="commonclass" href="about">About</a>
  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div>
<main>
<div className="flex-wrapper">

<div className="container">
  
  <div className="row">
  <h3 className="h3class">Enter Starting and Destination Bus Stop</h3>

  <div className="col-sm-6" id="form">
    
<Select className="optclass"
id="start"
  options={optionList}
  value={selectedOptionsFrom}
  placeholder="Starting Bus Stop"
  onChange={handleSelectFrom}
  isSearchable={true}
/>

<Select className="optclass"
  id="end"
  options={optionList}
  value={selectedOptionsTo}
  placeholder="Destination Bus Stop"
  onChange={handleSelectTo}
  isSearchable={true}
/>
<h6 className="h6class">Hint: Type initial few characters</h6>
<button onClick={submitfn} type="submit">Get Route</button>

</div>
<div className="col-sm-6"><Image src={hydImg} className="responsive" alt={''} />
  </div>
  </div>
  <h3 className="h3classHeadingOfEachSectiontext spacingClass">About Hyderabad City Bus Service</h3>
  <p className="descriptiontext">This website offers information about timetable, timings, various bus routes, and schedules for all buses running in Hyderabad. You can easily find a list of all buses running in the city at a single place along with their stops and route information.</p>
  <h3 className="h3classHeadingOfEachSectiontext spacingClass">Hyderabad City Bus Routes</h3>
  <p className="descriptiontext">The TSRTC operates a comprehensive bus service in Hyderabad and Secunderabad and its nearby places.City buses are available with various options, such as Metro Deluxe,Ordinary,Metro Express.They cover almost all parts of the city which includes important landmarks and tourist visited destinations.</p>
  <p className="descriptiontext">The intercity buses offers affordable and convinient transportation to other towns and cities of the state.It also provides transportation services to neighbouring states such as Andhra Pradesh, Karnataka and Maharashtra.</p>
  <p className="descriptiontext">In addition to this, private bus services are available in the twin cities, offering different routes with more services,comforts and amenities, at a little higher prices than the TSRTC city buses. The Hyderabad city bus service is an important part of Hyderabad`s transportation system, connecting cities and people.</p>
  <h3 className="h3classHeadingOfEachSectiontext spacingClass">Hyderabad City Bus Timings</h3>
  <p className="descriptiontext">Hyderbad has a very big network of routes, which exceeds 1000 in number.City buses help in covering both the city and the outskirts.The buses start early in the morning and end at late mid night.In addition to them some routes have buses round the clock providing added convinience to the people. They have the option to select AC buses as well with minimal cost.People who wish to travel to the airport has a dedicated bus service giving them premium services.</p>
  <p className="descriptiontext">Here Hyderabad city bus route guide is also available.</p>
  <h3 className="h3classHeadingOfEachSectiontext spacingClass">Hyderabad City Tour Bus</h3>
  <p className="descriptiontext">Are you exited to visit Hyderabad and explore various tourism loactions? If your answer is yes, then the TSRTC city bus service will do the best for you.Tourists coming from various places can find buses to all famous locations such as Charminar, Golconda, Hussain Sagar, Ramoji Film City and the list goes on.There is a bus exclusively running from Hyderabad city to Ramoji Film City. I myself found this service very benificial. I advise people to use this option if you are about to visit Ramoji Film City.</p>
  <h3 className="h3classHeadingOfEachSectiontext spacingClass">Hyderabad City Bus Pass</h3>
  <p className="descriptiontext">The TSRTC provides many different types of bus passes in the city,which includes the General Bus Pass, which is available at as low as Rs.700 per month. This bus pass will allow passengers to board on ordinary category buses in the city as well as Suburban areas.</p>
  <p className="descriptiontext">There is another category of bus pass which is `Metro Express` pass. It enables people to board on both general buses and Metro Express.The charges are Rs.800 per month for issuing this card.Similarly there is another category pass `Metro Luxury AC` pass which is issued Rs.2000 per month. This card allows passengers to board all types of buses irrespective of category.The issued passes cannot be transferred from one person to another and so they have attached photographs on ID cards.A cost of Rs.25 is charged in addition above all for ID card to be issued.The bus passes become invalid after an year which has be renewed.</p>
  
</div >
  <footer>
    <p>&copy; 2023 Cityroutemapper</p>
  </footer>
  </div>
  </main>
  
    </div>
  );
};

export default HomePage;
