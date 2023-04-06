import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from "axios";
import { Configuration, OpenAIApi } from 'openai';
//import { createReadStream } from 'fs';
import img1 from '../Assets/img1.png'; 
import { createReadStream } from 'fs';  
//map
//from,to text fields
//search button

//farecomparision button
//farecomparision page


const DallEImageVariation = () => {
  const [data, setData] = useState(null);
  const [startval, setstartval] = useState("");
  var ref = useRef(null);
  //const myElement = useRef(null);
  const next = useNavigate();
  function submitfn() {
    var startLocation = ((document.getElementById("start") as HTMLInputElement).value);
    console.log(startLocation);
    fetchData();
  }
  useEffect(() => {
    var elementStart = (document.getElementById("start") as HTMLInputElement).value;
    //console.log(elementStart);
    if (elementStart) {
    console.log(elementStart);
    }
    
    
  }, []);
  async function fetchData() {
    if (startval) {
      console.log(startval);
      

      setstartval("");

      
    } else {
      alert(" startval Cannnot be blank");
    }
    const body = {
        "prompt": startval,
        "n":10,
        "size":"512x512"
    };
    /*const response = await fetch("https://api.openai.com/v1/images/generations",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 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"
        },
        body: JSON.stringify(body)
      });
    const json = await response.json();
    console.log(json);
    setData(json["data"][0].url);*/
    const configuration = new Configuration({
        apiKey:'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',
    })

    const openai = new OpenAIApi(configuration);
    const prompt = startval;
    const response = await fetch("http://127.0.0.1:5000/images", {
      mode: 'cors'
    });
    const json = await response.json();
    setData(json);
    console.log(json);
    next('/image',{state:json});
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
    <h1>Get your images printed on your required materials</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Routes</a></li>
        <li><a href="#">Map</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <div id="a">
      <input id="start" type="text" placeholder="Enter prompt" ref={ref} value={startval} onChange={(e) => setstartval(e.target.value)}/>
      <button onClick={submitfn} type="submit">submit</button>
    </div>
  </main>
  <footer> 
    <p>&copy; 2023 Citymapper</p>
  </footer>

      
    </div>
  );
};

export default DallEImageVariation;
