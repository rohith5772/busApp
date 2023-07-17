import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Link from 'next/link';
import ReactGA from 'react-ga';
import fsPromises from 'fs/promises';
import path from 'path';

let PageSize = 10;

export default function App(props: any) {
  
  const router = useRouter();
  const busId= router.query.busId;
  const fromVal = router.query.From;
  const toVal = router.query.To;
  const [data, setData] = useState(props.data);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [inputValue, setInputValue] = useState(Number);
  const [busData, setBusData] = useState(null);
  const [stopTimings, setStopTimings] = useState<Array<string>>([]); // specify the type of the state variable as an array of strings
  //const [stateVal, setStateVal] = useState<BusData>({ buses_list: [] });
  const [timeLength,setTotalTimingsLength] = useState(Number);
  //const arrParticularStopTiming: Array<string> = [];
  const [arrParticularStopTiming, setArrParticularStopTiming] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [bus_Id, setBus_id] = useState(props.i);
  const [from, setFrom] = useState(props.from);
  const [to, setTo] = useState(props.to);
  const metaDescription = "Ahmedabad City Bus Routes TimeTable from"+props.from+"to"+ props.to;
  const titleVal = "Ahmedabad City Bus Routes TimeTable of route " +props.busId+ " from " +props.fromVal+ " to " +props.toVal;
  const toggleEditing = (valA: any, valB: any) => {
    console.log('Toggling editing with values:', valA, valB);
    setIsEditing(!isEditing);
  };

  console.log(props.busesList);
  useEffect(() => {
  /*  async function fetchResult() {
      try { 
        const params = new URLSearchParams(location.search);

    const busId = params.get('busId');
    const fromVal = params.get('From');
    const toVal = params.get('To');
        const response = await fetch("https://rohith5772.pythonanywhere.com/busroutewithtimings"+"?busId="+busId+"&fromVal="+fromVal+"&toVal="+toVal);
          const data: BusData = await response.json();
        setStateVal(data);
        console.log(fromVal);
        console.log(toVal);
      } catch (error) {
        console.error(error);
      } 
    }
    fetchResult();*/ 
    ReactGA.pageview(window.location.href);
setData(props.data);
setBus_id(props.i);
       }, []);
       
  const arr: any[] = [];    
  
  /*if (stateVal.buses_list) {
    setBusData(stateVal.buses_list[0].Stop_Timings);
    for(let i = 0;i<location.state.buses_list[0].Stop_Timings.length;i++)
    {
      arr.push(location.state.buses_list[0].Stop_Timings[i]);
    }
  }*/
  const closePopup = () => {
    setIsPopupOpen(false);
    setMyArray([]);
    if (arr.length === 0) {
      console.log('The array is empty');
      return null; 
    }
  
  };
  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    //setInputValue(event.target.value);
    console.log(busData+"handleInputChange");
  };

  function submitfn(val1: string,val2: string) {
    console.log(val1,val2);
    fetchData(val1,val2);
  }
  function myFunction() {
    var x = (document.getElementById("myTopnav") as HTMLInputElement);
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    }
  async function fetchData(val1: string,val2: string) {
    const params = new URLSearchParams(location.search);

    
    /*const response = await fetch("http://127.0.0.1:5000/busroutewithtimings"+"?busId="+busIdVal+"&fromVal="+fromVal+"&toVal="+toVal, {
        mode: 'cors'
      });
      const json = await response.json();
      setData(json);
      console.log(json);*/

      router.push({
        pathname: '/listingpage',
        query: {From:fromVal ,To:toVal },
      });
  }
  const [myArray, setMyArray] = useState(['']);

 
  const PopupContent = () => {console.log("hi",arr[0]);
    return (
      <div>
      

<td className = "td-class">{myArray.map((timings : any , i : number)=>{
          if(myArray.length - 1 === i)
          return (<span key={i}>{timings} </span>)
          else{
            return (<span key={i}>{timings} , </span>)
          }
        })}</td>
        <button onClick={closePopup}>Close</button>
      </div>
    );
  };

  return (
    <div>
    <title>{titleVal}</title><meta name = "keyword" content="find bus schedule,City bus timetable, Ahmedabad City Bus,,bus schedule,"/>
    <meta name="description" content={metaDescription} />
    <meta name="keyword" content="Ahmedabad City Bus Routes, Ahmedabad bus timings" />

    <h1 className="h1class"><a href="" title="Ahmedabad Bus Routes " target="_self">Ahmedabad City Bus Routes</a></h1>
    <div className="topnav" id="myTopnav">
    <Link id = "home" href="/india/Ahmedabad">home</Link>
        <Link id = "bustimings"  href="/india/Ahmedabad/bustimings">Search Bus</Link>
        <Link id = "allbuses"  href="/india/Ahmedabad/allbuses" className="active">All Buses</Link>
        <Link id = "contact"  href="/india/Ahmedabad/contact">Contact</Link>
        <Link id = "about"  href="/india/Ahmedabad/about">About</Link>
        <Link id = "metrotimings" href="/india/Ahmedabad/metrotimings">Metro Timings</Link>

  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div>
<main>
  <div className="flex-wrapper">
  <div className="container">
  <div className="row">
  <div className="col-sm-6">
  <h4><b>{data.bus_id}</b> City Bus Route &amp; Timings</h4>
  <p>Ahmedabad city route no <strong>{data.bus_id}</strong> managed by <a href="http://www.tsrtc.telangana.gov.in/" target="_blank" rel="noopener noreferrer">TSRTC</a>, starts from <strong>{data.From}</strong> and ends at <strong>{data.To}</strong>. The city bus covers a total of <strong>{data.stop_id.length} bus stops</strong> during its trip.</p>

  <ul className="stops-list bordered experiences">
  {/* 
        {data.stop_id.map((stop:any, index:any) => (
          <li key={index}>{stop}</li>
        ))}
       */}
  {data.stop_id.map((stop:any,index: any) => (
        <li key={index}>
  <div className="stop-wrapper" >{stop}</div>
  {/*<button className="schedule-link upcoming-arrivals-link" onClick={openPopup} value={index}>Upcoming Arrivals</button>*/}
      
      
        </li>
      ))}</ul>
      </div>
      <div className="col-sm-6 text-center">
      {/*POPULAR BUS ROUTES
      <br></br>
      <button className="schedule-link upcoming-arrivals-link" onClick={(e) => submitfn("Nagole", "Raidurg")}> Click to view buses from Nagole to Raidurg</button>
      <button className="schedule-link upcoming-arrivals-link" onClick={(e) => submitfn("Nagole", "Raidurg")}> Click to view buses from Nagole to Raidurg</button>
      <button className="schedule-link upcoming-arrivals-link" onClick={(e) => submitfn("Nagole", "Raidurg")}> Click to view buses from Nagole to Raidurg</button>
      <button className="schedule-link upcoming-arrivals-link" onClick={(e) => submitfn("Nagole", "Raidurg")}> Click to view buses from Nagole to Raidurg</button>
      <button className="schedule-link upcoming-arrivals-link" onClick={(e) => submitfn("Nagole", "Raidurg")}> Click to view buses from Nagole to Raidurg</button>
      <button className="schedule-link upcoming-arrivals-link" onClick={(e) => submitfn("Nagole", "Raidurg")}> Click to view buses from Nagole to Raidurg</button>
      <button className="schedule-link upcoming-arrivals-link" onClick={(e) => submitfn("Nagole", "Raidurg")}> Click to view buses from Nagole to Raidurg</button>
      <button className="schedule-link upcoming-arrivals-link" onClick={(e) => submitfn("Nagole", "Raidurg")}> Click to view buses from Nagole to Raidurg</button>
      <button className="schedule-link upcoming-arrivals-link" onClick={(e) => submitfn("Nagole", "Raidurg")}> Click to view buses from Nagole to Raidurg</button>
      <button className="schedule-link upcoming-arrivals-link" onClick={(e) => submitfn("Nagole", "Raidurg")}> Click to view buses from Nagole to Raidurg</button>
    */}
      </div>
      </div>
      </div>
      <div>
 </div>
  <footer>
    <p>&copy; 2023 Cityroutemapper</p>
  </footer>
</div>
</main>
    </div>
  );
}
export async function getServerSideProps (context: any) {
  
  console.log("zs");
  console.log(context);
  console.log(context.query.slug);
  var busId = context.query.slug.split('-')[0];
  busId = busId.replaceAll('_','-');
  var filename = context.query.slug.split('-')[1];
  console.log(context.query.slug.split("-")[context.query.slug.split("-").length-1],context.query.slug.split("-").length)
  var s_no = context.query.slug.split("-")[context.query.slug.split("-").length-1];
  console.log(busId,filename,s_no);  

  //const response = await fetch("https://rohith5772.pythonanywhere.com/busroutewithtimings"+"?busId="+busId+"&fromVal="+fromVal+"&toVal="+toVal);
  //const response =  await fetch("http://127.0.0.1:5000/busroutewithtimings"+"?busId="+busId+"&fromVal="+fromVal+"&toVal="+toVal);
 /* const response = await fetch("https://buwudfhowtxh2cgkwtrqucdnqy0ibsmy.lambda-url.ap-south-1.on.aws/?busId="+busId+"&fromVal="+fromVal+"&toVal="+toVal+"&filename="+filename+"&country="+country+"&city="+city+"&service="+service);

  const busesList: BusData = await response.json();
  
return {
props: {busesList,busId,fromVal,toVal}, // will be passed to the page component as props
}*/
const filePath = path.join(process.cwd(), 'src/json/usa/newjersey/'+filename+'.json');
const jsonData = await fsPromises.readFile(filePath, { encoding: 'utf-8' });
  let data = JSON.parse(jsonData);
  //console.log(data);
var i;
  for(i =0;i<data.length;i++)
  {
    //console.log(data[i]);
    if(data[i].bus_id.toLowerCase() == busId && (parseInt(data[i].S_No)%2).toString() == s_no)
    { 
      console.log("hip");

      console.log(data[i].stop_id);
      break;
    }
  }
data = data[i]; 
return {
    props: {data,i},
  }
}