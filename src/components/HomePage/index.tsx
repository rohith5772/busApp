import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react'
import './HomePage.css';
import axios from "axios";

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
  const next = useNavigate();
  function submitfn() {
    var startLocation = ((document.getElementById("start") as HTMLInputElement).value);
    var endLocation = ((document.getElementById("end") as HTMLInputElement).value);
    console.log(startLocation,endLocation);
    fetchData();
  }
  useEffect(() => {
    var elementStart = (document.getElementById("start") as HTMLInputElement).value;
    let elementEnd = (document.getElementById("end") as HTMLInputElement).value;
    //console.log(elementStart);
    if (elementStart) {
    console.log(elementStart);
    }
    if (elementEnd) {
      console.log(elementEnd);
    } 
    
  }, []);
  async function fetchData() {
    if (startval && endval) {
      console.log(startval);
      console.log(endval);

      setstartval("");
      setendval("");

      
    } else {
      alert("  endval and startval Cannnot be blank");
    }
    const response = await fetch("https://rohith5772.pythonanywhere.com/", {
      mode: 'cors'
    });
    const json = await response.json();
    setData(json);
    console.log(json);

    next('/listing',{state:json});
  }
  return (
    <div>
        <div id="map"></div>
    {/* <label htmlFor="start">Start: </label>
    <input type="text" id="start"  ref={ref} value={startval} onChange={(e) => setstartval(e.target.value)}/>
    <br/>
    <label htmlFor="end">End: </label>
    <input type="text" id="end" ref={ref} value={endval} onChange={(e) => setendval(e.target.value)}/>
    <br/>
    <button id="submitBtn" onClick={submitfn}>Submit</button>

      {data ? <div>{JSON.stringify(data)}</div> : <div>Loading...</div>} */}
 <header>
    <h1>Citymapper</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#/BusTimings">Routes</a></li>
        <li><a href="#">Map</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <div id="a">
      <input id="start" type="text" placeholder="Enter starting point" ref={ref} value={startval} onChange={(e) => setstartval(e.target.value)}/>
      <input id="end" type="text" placeholder="Enter destination" ref={ref} value={endval} onChange={(e) => setendval(e.target.value)}/>
      <button onClick={submitfn} type="submit">Get Directions</button>
    </div>
  </main>
  <footer>
    <p>&copy; 2023 Citymapper</p>
  </footer>

      
    </div>
  );
};

export default HomePage;
