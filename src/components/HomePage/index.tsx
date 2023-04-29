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

    if(currentUrl === 'http://localhost:3000/' || currentUrl === 'http://localhost:3000'|| currentUrl === 'http://localhost:3000/#' || currentUrl === 'https://hyderabad-city-mapper.web.app/' || currentUrl === 'https://hyderabad-city-mapper.web.app/#' || currentUrl === 'https://hyderabad-city-mapper.web.app'){
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
              <h1 className="h1class"><a href="http://www.hyderabadcitybus.com/" title="Hyderabad Bus Routes " target="_self">Hyderabad City Bus Routes</a></h1>

        <div id="map"></div>
        <div className="topnav" id="myTopnav">
   <a id = "home" href="/" className="commonclass">Home</a>
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
<div className="col-sm-6">
  </div>
  </div>
  <h3 className="h3classHeadingOfEachSectiontext spacingClass">About Hyderabad City Bus Service</h3>
  <p className="descriptiontext">This site provides the bus Routes, Timings, Timetable and schedule of all buses operating in Hyderabad. You can get list of all Hyderabad City route here in one page and select the route where you are intended to go.</p>
  <h3 className="h3classHeadingOfEachSectiontext spacingClass">Hyderabad City Bus Routes</h3>
  <p className="descriptiontext">There are more than 1000 City Bus Routes In Hyderabad. These bus routes are spread all over the city and outskirt. They start the buses early in the morning to late light. In few routes they rub the buses round the clock also. AC buses are also available for the convenience of the passenger.</p>
  <p className="descriptiontext">Airport bus services are also available for the passenger going to the Air Port. This is the premium service being provided. Similarly, a passenger can get bus for all tourist destinations such as Ramoji Film City. The bus service from Hyderabad to Ramoji Film city goes long way to 40 km and returns from there as per passenger convenience.</p>
  <h3 className="h3classHeadingOfEachSectiontext spacingClass">Hyderabad City Bus Timings</h3>
  <p className="descriptiontext">City bus timings in Hyderabad available here the convenience of the passengers. The bus service is provided since early in 5 AM to 11PM in almost all the routes. There are few exceptions also to this, such as in few routes they run buses round the clock.</p>
  <p className="descriptiontext">Here Hyderabad city bus route guide is also available.</p>
  <h3 className="h3classHeadingOfEachSectiontext spacingClass">Hyderabad City Tour Bus</h3>
  <p className="descriptiontext">Do you want to get tour of Hyderabad? If, yes then Hyderabad City Bus can make your experience better by providing good quality of buses with best infrastructure. You can get complete tour package of the Hyderabad city and selective as well. Tour bus service from Hyderabad to Ramoji Film city is exclusive one here. I have used this bus service many times and found it very useful. I recommend people to use this bus service if you are visiting Ramoji Film city.</p>
  <h3 className="h3classHeadingOfEachSectiontext spacingClass">Hyderabad City Bus Pass</h3>
  <p className="descriptiontext">TSRTC issues many General Bus Passes in Hyderabad. General bus ticket is available for Rs.700 monthly. With this pass passengers can travel in ordinary buses in twin city (Hyderabad and Secunderabad) and sub-urban area. There is another category of bus passes called “Metro Express”. The passenger having this pass can travel in Metro Express as well as in General buses. The monthly cost of Metro Express pass is Rs 800/-. The next bus passes are Metro Deluxe. With this passengers can travel in TSRTC’s ordinary, Metro Express and Metro Deluxe buses.</p>
  <p className="descriptiontext">Metro Luxury AC monthly pass comes for Rs 2000/- per month. With this pass one can travel all type of buses including premium air-conditioned Volvo buses in city and sub-urban area. Rs 25/- is additional charges above all for ID card to be issued. These bus passes are non-transferable and thus they will have photographs in ID cards. This card will be valid for maximum one year only. You can get Comparison of Various Bus Passes here</p>
  <h3 className="h3classHeadingOfEachSectiontext spacingClass">Hyderabad City To Airport Bus Services</h3>
  <p className="descriptiontext">The bus service to airport is also available from LB Nagar, Airport to Hitech City / Kukatpally, Airport to City College / Secretariat, Airport to Mehdipatnam / Paryatak Bhavan. The bus services have 30 minutes or 60 minutes frequency depending on route</p>
  <h3 className="h3classHeadingOfEachSectiontext spacingClass">List of all Hyderabad Bus Stands</h3>
  <p className="descriptiontext">Hyderabad city bus has more than 1000 bus stand all over the city and outskirt of its route. This local bus service is being provided by the state Government at cheapest rate that a normal citizen can afford it well.</p>
  <p className="descriptiontext">City bus is made affordable as it being used by the poor people of the city that has lo income. Inspite of operating at low cost, it is in profits for many years. This shows the effectiveness and management of employees and officers employed there. You must see one of their buses stands “Mahatma Gandhi bus station, Hyderabad”. This is outstanding in term of easiness and cleanliness.</p>
  <p className="descriptiontext">Click Here To Find List of all Hyderabad Bus Stands</p>
  <p className="descriptiontext">If You have any suggestions then you may give us and we will try implement it to this website. Our aim here is to provide seamless flow of information wihtout any error. This will make us user friendly and citizens of Hyderabad will get benefited out of this facility. So, feel free to put you valuable feedback</p>

</div >
  <footer>
    <p>&copy; 2023 Citymapper</p>
  </footer>
  </div>
  </main>
  
    </div>
  );
};

export default HomePage;
