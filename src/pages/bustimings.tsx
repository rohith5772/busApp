import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react'
import axios from "axios";
import Select from "react-select";
import { useRouter } from 'next/router';

//map
//from,to text fields
//search button

//farecomparision button
//farecomparision page


const BusTimings = ({ products, totalProducts, currentPage }: any) => {
  const [data, setData] = useState(null);
  const [startval, setstartval] = useState("");
  var ref = useRef(null);
  //const myElement = useRef(null);
  const router = useRouter();
  const optionList = [
    { value: "8A", label: "8A" },
    { value: "9B", label: "9B" },
    { value: "8BC", label: "8BC" },
    { value: "10C", label: "10C" }
  ];
  const [selectedOptions, setSelectedOptions] = useState<undefined | { value: string; label: string }>(undefined);

  function handleSelect(data:any) {
    setSelectedOptions(data);
    console.log(data['value']);
  }

  function submitfn(event: any) {
    event.preventDefault();
    console.log(event+"from");
    console.log(selectedOptions?.label);

    fetchData();
  }
  let myClassElements = useRef([]);

  useEffect(() => {
    //const hostname = window.location.hostname;
    //console.log(hostname);
    const currentUrl = window.location.href;
    console.log(currentUrl);
    const hasWord = currentUrl.includes('bustimings');

    console.log(hasWord+"hasWord");
    document.getElementsByClassName('commonclass');
     for (let i = 0; i < document.getElementsByClassName('commonclass').length; i++) {
      console.log(document.getElementsByClassName('commonclass')[i].className = "commonclass");
    }

    if(currentUrl.includes('bustimings') == true){
      var val = (document.getElementById("bustimings") as HTMLInputElement);
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
    if (selectedOptions?.label) {
      console.log(selectedOptions.label+"fetch");

      setstartval("");

      
    } else {
      alert("Bus Number cannot be blank");
      return;
    }
    /*const response = await fetch("http://127.0.0.1:5000/routeTimingsBasedOnBusId?busId="+selectedOptions.label, {
      mode: 'cors'
    });
    const json = await response.json();
    setData(json);
    console.log(json);
    */
    router.push({
      pathname: '/busroutefromto',
      query: {/* state: JSON.stringify(json),*/busId:selectedOptions.label}
    });
  }
  return (
    <div>
        <h1 className="h1class"><a href="" title="Hyderabad Bus Routes " target="_self">Hyderabad City Bus Routes</a></h1>

        <div id="map"></div>
    {/* <label htmlFor="start">Start: </label>
    <input type="text" id="start"  ref={ref} value={startval} onChange={(e) => setstartval(e.target.value)}/>
    <br/>
    <label htmlFor="end">End: </label>
    <input type="text" id="end" ref={ref} value={endval} onChange={(e) => setendval(e.target.value)}/>
    <br/>
    <button id="submitBtn" onClick={submitfn}>Submit</button>

      {data ? <div>{JSON.stringify(data)}</div> : <div>Loading...</div>} */}
   <div className="topnav" id="myTopnav">
   <a id = "home" href="https://cityroutemapper.com/" className="commonclass">Home</a>
  <a id = "bustimings" className="commonclass" href="https://cityroutemapper.com/bustimings">Search Bus</a>
  <a id = "allbuses" className="commonclass" href="allbuses">All Buses</a>
  <a id = "contact" className="commonclass" href="contact">Contact</a>
  <a id = "about" className="commonclass" href="about">About</a>

  <a href="" className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div>
  <main>
  <div className="flex-wrapper">
  <div className="container">
  <div className="row">
  <h3 className="h3class">Enter Bus Number</h3>

  <div className="col-sm-6" id="form">
  <Select className="optclass"
id="start"
  options={optionList}
  value={selectedOptions}
  placeholder="Bus Number"
  onChange={handleSelect}
  isSearchable={true}
/>
<h6 className="h6class">Hint: Type initial few characters</h6>

      <button onClick={submitfn} type="submit">Search</button>
    </div>
    </div>
    </div>
  <footer>
    <p>&copy; 2023 Cityroutemapper</p>
  </footer>
</div>
</main>


    </div>
  );
};

export default BusTimings;
