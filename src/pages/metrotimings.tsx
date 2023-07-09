import React, { useRef } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga';

import { useEffect,useState } from 'react'
//import './homePage.css';

import Select from "react-select";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
import Loader from '../components/loader';
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
  const [loading, setLoading] = useState(false);

  //const myElement = useRef(null);
  //const router = useNavigate();
  const router = useRouter();
  const optionList = [
    {value: "Ameerpet", label:"Ameerpet"},
    {value: "Assembly", label:"Assembly"},
    {value: "Balanagar", label:"Balanagar"},
    {value: "Begumpet", label:"Begumpet"},
    {value: "Bharath Nagar", label:"Bharath Nagar"},
    {value: "Chaitanyapuri", label:"Chaitanyapuri"},
    {value: "Chikkadapally", label:"Chikkadapally"},
    {value: "Dilshuknagar", label:"Dilshuknagar"},
    {value: "Durgam Cheruvu", label:"Durgam Cheruvu"},
    {value: "ESI", label:"ESI"},
    {value: "Erragadda", label:"Erragadda"},
    {value: "Gandhi Bhavan", label:"Gandhi Bhavan"},
    {value: "Gandhi Hospital", label:"Gandhi Hospital"},
    {value: "Habsiguda", label:"Habsiguda"},
    {value: "HiTech City", label:"HiTech City"},
    {value: "Irrumanzil", label:"Irrumanzil"},
    {value: "JNTU", label:"JNTU"},
    {value: "Jubilee Hills Check Post", label:"Jubilee Hills Check Post"},
    {value: "KPHB", label:"KPHB"},
    {value: "Khairatabad", label:"Khairatabad"},
    {value: "Kukatpally", label:"Kukatpally"},
    {value: "L B Nagar", label:"L B Nagar"},
    {value: "Lakdikapul", label:"Lakdikapul"},
    {value: "M G Bus station", label:"M G Bus station"},
    {value: "Madhapur", label:"Madhapur"},
    {value: "Madhura Nagar", label:"Madhura Nagar"},
    {value: "Malakpet", label:"Malakpet"},
    {value: "Mettuguda", label:"Mettuguda"},
    {value: "Miyapur", label:"Miyapur"},
    {value: "Moosapet", label:"Moosapet"},
    {value: "Musheerabad", label:"Musheerabad"},
    {value: "Mussarambagh", label:"Mussarambagh"},
    {value: "NGRI", label:"NGRI"},
    {value: "Nagole", label:"Nagole"},
    {value: "Nampally", label:"Nampally"},
    {value: "Narayanguda", label:"Narayanguda"},
    {value: "New Market", label:"New Market"},
    {value: "Osmania Medical College", label:"Osmania Medical College"},
    {value: "Panjagutta", label:"Panjagutta"},
    {value: "Parade Grounds", label:"Parade Grounds"},
    {value: "Paradise", label:"Paradise"},
    {value: "Pedamma Temple", label:"Pedamma Temple"},
    {value: "Prakash Nagar", label:"Prakash Nagar"},
    {value: "RTC X Roads", label:"RTC X Roads"},
    {value: "Raidurg", label:"Raidurg"},
    {value: "Rasoolpura", label:"Rasoolpura"},
    {value: "Road No 5 Jubilee Hills", label:"Road No 5 Jubilee Hills"},
    {value: "S R Nagar", label:"S R Nagar"},
    {value: "Secunderabad ( E )", label:"Secunderabad ( E )"},
    {value: "Secunderabad (W)", label:"Secunderabad (W)"},
    {value: "Stadium", label:"Stadium"},
    {value: "Sultan Bazar", label:"Sultan Bazar"},
    {value: "Tarnaka", label:"Tarnaka"},
    {value: "Uppal", label:"Uppal"},
    {value: "Victoria Memorial", label:"Victoria Memorial"},
    {value: "Yusufguda", label:"Yusufguda"},
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
    console.log(selectedOptionsFrom?.label,selectedOptionsTo?.label);
    fetchData();
  }
  useEffect(() => {
    //const hostname = window.location.hostname;
    //console.log(hostname);
    const currentUrl = window.location.href;
    console.log(currentUrl);
    const hasWord = currentUrl.includes('metrotimings');

    console.log(hasWord+"hasWord");
    document.getElementsByClassName('commonclass');
     for (let i = 0; i < document.getElementsByClassName('commonclass').length; i++) {
      console.log(document.getElementsByClassName('commonclass')[i].className = "commonclass");
    }

    if(currentUrl.includes('metrotimings') == true){
      var val = (document.getElementById("metrotimings") as HTMLInputElement);
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
    try{
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
   /* router.push({
      pathname: '/listingpage',
      query: {From:selectedOptionsFrom.label ,To:selectedOptionsTo.label}
    }); */
    router.push({
      pathname: `/metro/hyderabad-city-trains-that-goes-from-${encodeURIComponent(selectedOptionsFrom.label)}-to-${encodeURIComponent(selectedOptionsTo.label)}`,
    });}
    catch (err){
      console.log(err)
   } 
   finally{
     setLoading(false)
   }
  }
  useEffect(() => {
    setLoading(true)
  }, [router])
  return (
    <div>
      {
        !loading ? <Loader/> : <></>  
      }

      <title>All Schedule Timing TimeTable of hyderabad City Bus</title><meta name = "keyword" content="find bus schedule,City bus timetable, hyderabad City Bus,,bus schedule,"/>
      <meta name = "keyword" content="bus timings hyderabad city,hyderabad bus route,find bus schedule,hyderabad City route map, bus timetable pdf,city bus routes,bus routes list hyderabad,hyderabad City Bus"/>
          <meta name="description" content="Find hyderabad City Bus Routes Schedule Timings TimeTable and info.Get bus Route pdf"/>
              <h1 className="h1class"><a href="" title="hyderabad Bus Routes " target="_self">hyderabad City Bus Routes</a></h1>

        <div id="map"></div>
        <div className="topnav" id="myTopnav">
   <Link id = "home" href="/" className="commonclass">home</Link>
  <Link id = "bustimings" className="commonclass" href="/bustimings" >Search Bus</Link>
  <Link id = "allbuses" className="commonclass" href="/allbuses">All Buses</Link>
  <Link id = "contact" className="commonclass" href="/contact">Contact</Link>
  <Link id = "about" className="commonclass" href="/about">About</Link>
  <Link id = "metrotimings" className="commonclass" href="/metrotimings">Metro Timings</Link>

  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div>
<main>
<div className="flex-wrapper">

<div className="container">
  
  <div className="row">
  <h3 className="h3class">Enter Starting and Destination Stop</h3>

  <div className="col-sm-6" id="form">
    
<Select className="optclass"
id="start"
  options={optionList}
  value={selectedOptionsFrom}
  placeholder="Starting Stop"
  onChange={handleSelectFrom}
  isSearchable={true}
/>

<Select className="optclass"
  id="end"
  options={optionList}
  value={selectedOptionsTo}
  placeholder="Destination Stop"
  onChange={handleSelectTo}
  isSearchable={true}
/>
<h6 className="h6class">Hint: Type initial few characters</h6>
<button onClick={submitfn} type="submit">Get Route</button>

</div>
<div className="col-sm-6">{/*<Image src={hydImg} className="responsive" alt={''} />*/}
  </div>
  </div>
  <h3 className="h3classHeadingOfEachSectiontext spacingClass">About hyderabad City Bus Service</h3>
  <p className="descriptiontext">This website offers information about timetable, timings, various bus routes, and schedules for all buses running in hyderabad. You can easily find a list of all buses running in the city at a single place along with their stops and route information.</p>
  <h3 className="h3classHeadingOfEachSectiontext spacingClass">hyderabad City Bus Routes</h3>
  <p className="descriptiontext">The TSRTC operates a comprehensive bus service in hyderabad and Secunderabad and its nearby places.City buses are available with various options, such as Metro Deluxe,Ordinary,Metro Express.They cover almost all parts of the city which includes important landmarks and tourist visited destinations.</p>
  <p className="descriptiontext">The intercity buses offers affordable and convinient transportation to other towns and cities of the state.It also provides transportation services to neighbouring states such as Andhra Pradesh, Karnataka and Maharashtra.</p>
  <p className="descriptiontext">In addition to this, private bus services are available in the twin cities, offering different routes with more services,comforts and amenities, at a little higher prices than the TSRTC city buses. The hyderabad city bus service is an important part of hyderabad`s transportation system, connecting cities and people.</p>
  <h3 className="h3classHeadingOfEachSectiontext spacingClass">hyderabad City Bus Timings</h3>
  <p className="descriptiontext">Hyderbad has a very big network of routes, which exceeds 1000 in number.City buses help in covering both the city and the outskirts.The buses start early in the morning and end at late mid night.In addition to them some routes have buses round the clock providing added convinience to the people. They have the option to select AC buses as well with minimal cost.People who wish to travel to the airport has a dedicated bus service giving them premium services.</p>
  <p className="descriptiontext">Here hyderabad city bus route guide is also available.</p>
  <h3 className="h3classHeadingOfEachSectiontext spacingClass">hyderabad City Tour Bus</h3>
  <p className="descriptiontext">Are you exited to visit hyderabad and explore various tourism loactions? If your answer is yes, then the TSRTC city bus service will do the best for you.Tourists coming from various places can find buses to all famous locations such as Charminar, Golconda, Hussain Sagar, Ramoji Film City and the list goes on.There is a bus exclusively running from hyderabad city to Ramoji Film City. I myself found this service very benificial. I advise people to use this option if you are about to visit Ramoji Film City.</p>
  <h3 className="h3classHeadingOfEachSectiontext spacingClass">hyderabad City Bus Pass</h3>
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
