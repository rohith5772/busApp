import React, { useState, useMemo } from 'react';
import Pagination from '../../../../pagination';
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Link from 'next/link';
import ReactGA from 'react-ga';

let PageSize = 10;
interface BusData {

buses_list: {
  Stop_Timings: any;
  Arr_Time: string;
  Dep_Time: string;
  Freq: string;
  From: string;
  Station_Order: number;
  To: string;
  bus_id: string;
  stop_id: string;
}[];
}
export default function App(props: any) {
  
  const router = useRouter();
  const busId= router.query.busId;
  const fromVal = router.query.From;
  const toVal = router.query.To;
  const [data, setData] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [inputValue, setInputValue] = useState(Number);
  const [busData, setBusData] = useState(null);
  const [stopTimings, setStopTimings] = useState<Array<string>>([]); // specify the type of the state variable as an array of strings
  const [stateVal, setStateVal] = useState<BusData>(props.busesList);//if you want to do server side rendering just uncooment this line and comment below line and comment useeffect method and uncomment getserversideprops..thats it
  //const [stateVal, setStateVal] = useState<BusData>({ buses_list: [] });
  const [timeLength,setTotalTimingsLength] = useState(Number);
  //const arrParticularStopTiming: Array<string> = [];
  const [arrParticularStopTiming, setArrParticularStopTiming] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [bus_Id, setBus_id] = useState(props.bus_Id);
  const [from, setFrom] = useState(props.from);
  const [to, setTo] = useState(props.to);
  const metaDescription = "hyderabad City Bus Routes TimeTable from"+props.from+"to"+ props.to;
  const titleVal = "hyderabad City Bus Routes TimeTable of route " +props.busId+ " from " +props.fromVal+ " to " +props.toVal;
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

       }, []);
       
  const arr: any[] = [];    
  function openPopup(event:any) {
    setIsPopupOpen(true);
    setInputValue(event.currentTarget.value);
    console.log(event.currentTarget.value);
    console.log(stateVal);
    const stopTimingsArray = stateVal.buses_list.map((bus) => bus.Stop_Timings);
    setStopTimings(stopTimingsArray);
    setTotalTimingsLength(stopTimingsArray[event.currentTarget.value].length);
    console.log(stopTimingsArray[event.currentTarget.value]);
    console.log(timeLength);
    setMyArray([]);

    for(let i = 0;i<stopTimingsArray[event.currentTarget.value].length;i++)
    {
        console.log(stopTimingsArray[event.currentTarget.value][i]);
        arr.push(stopTimingsArray[event.currentTarget.value][i]);
        arrParticularStopTiming.push(stopTimingsArray[event.currentTarget.value][i]);
        setArrParticularStopTiming([...arrParticularStopTiming, arr[i]])
        console.log(arr[i]+"arrr");
        setMyArray(prevArray => [...prevArray, arr[i]]);

    }
    console.log(arr[0],arrParticularStopTiming[0]+"app");
   
  }
  
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
      
      <p>{stateVal.buses_list[inputValue].bus_id} stops at {stateVal.buses_list[inputValue].stop_id} at </p>

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
    <title>{titleVal}</title><meta name = "keyword" content="find bus schedule,City bus timetable, hyderabad City Bus,,bus schedule,"/>
    <meta name="description" content={metaDescription} />
    <meta name="keyword" content="hyderabad City Bus Routes, hyderabad bus timings" />

    <h1 className="h1class"><a href="" title="hyderabad Bus Routes " target="_self">hyderabad City Bus Routes</a></h1>
    <div className="topnav" id="myTopnav">
    <Link id = "home" href="/india/hyderabad">home</Link>
        <Link id = "bustimings"  href="/india/hyderabad/bustimings">Search Bus</Link>
        <Link id = "allbuses"  href="/india/hyderabad/allbuses" className="active">All Buses</Link>
        <Link id = "contact"  href="/india/hyderabad/contact">Contact</Link>
        <Link id = "about"  href="/india/hyderabad/about">About</Link>
        <Link id = "metrotimings" href="/india/hyderabad/metrotimings">Metro Timings</Link>

  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div>
<main>
  <div className="flex-wrapper">
  <div className="container">
  <div className="row">
  <div className="col-sm-6">

  <h4><b>{stateVal.buses_list[0]?.bus_id}</b> City Bus Route &amp; Timings</h4>
  <p>hyderabad city bus no <strong>{stateVal.buses_list[0]?.bus_id}</strong> managed by <a href="http://www.tsrtc.telangana.gov.in/" target="_blank" rel="noopener noreferrer">TSRTC</a>, starts from <strong>{stateVal.buses_list[0]?.From}</strong> and ends at <strong>{stateVal.buses_list[0]?.To}</strong>. The city bus covers a total of <strong>{stateVal.buses_list.length} bus stops</strong> during its trip.</p>
  <ul className="stops-list bordered experiences">

  {stateVal.buses_list.map((bus: { bus_id: React.Key | null | undefined; 
      stop_id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; 
      Freq: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
      Arr_Time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;

    },index: any) => (
        <li key={bus.bus_id}>
  <div className="stop-wrapper" >{bus.stop_id}</div>
  {/*<button className="schedule-link upcoming-arrivals-link" onClick={openPopup} value={index}>Upcoming Arrivals</button>*/}
      
      <Popup
        open={isPopupOpen}
        closeOnDocumentClick={false}
        onClose={closePopup}
      >
        <PopupContent />
      </Popup>
      
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
  console.log(context.query.slug);
  var busid = context.query.slug;
  var busId = busid.split('-')[3];
  busId = busId.replaceAll('_','-');
  var val = context.query.slug;
  var fromVal = val.split('-')[7];
  var toVal = val.split('-')[9];
  var filename = val.split('-')[10];
  var country = val.split('-')[11];
  var city = val.split('-')[12];
  var service = val.split('-')[13]+'-'+val.split('-')[14];
  console.log(busId,fromVal,toVal,service,filename);  

  //const response = await fetch("https://rohith5772.pythonanywhere.com/busroutewithtimings"+"?busId="+busId+"&fromVal="+fromVal+"&toVal="+toVal);
  //const response =  await fetch("http://127.0.0.1:5000/busroutewithtimings"+"?busId="+busId+"&fromVal="+fromVal+"&toVal="+toVal);
  const response = await fetch("https://buwudfhowtxh2cgkwtrqucdnqy0ibsmy.lambda-url.ap-south-1.on.aws/?busId="+busId+"&fromVal="+fromVal+"&toVal="+toVal+"&filename="+filename+"&country="+country+"&city="+city+"&service="+service);

  const busesList: BusData = await response.json();
  
return {
props: {busesList,busId,fromVal,toVal}, // will be passed to the page component as props
}
}