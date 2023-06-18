import React, { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react'
import ReactGA from 'react-ga';

import { useRouter } from 'next/router';
import Link from 'next/link';


interface BusData {
  buses_list_from: {
    Arr_Time: string;
    From: string;
    To: string;
    bus_id: string;
    stop_id: string;
  }[];
  buses_list_to: {
    Arr_Time: string;
    From: string;
    To: string;
    bus_id: string;
    stop_id: string;
  }[];
}


const  BusIdRouteFromTo = (props: any) =>{
  const router = useRouter();
  const busId = router.query.busId;
  const { json } = router.query;
  const fromVal = router.query.From;
  const toVal = router.query.To;
  //const [stateVal, setStateVal] = useState<BusData>({ buses_list_from: [],buses_list_to: [] });
  console.log(props.busesList);
  const [stateVal, setStateVal] = useState<BusData>(props.busesList);
  const metaContentDescriptionBusId = "hyderabad City Map and Bus Routes,Get hyderabad City Bus Route"+props.bus_Id+"Time Table, Timings";
  const metaContentKeywordBusId = "hyderabad City Bus,hyderabad Bus Route"+props.bus_Id+",   find bus schedule, all routes of hyderabad city bus,bus timetable"
  const titleVal = "hyderabad City Bus Route of " +props.busId;

  console.log(props.busesList);
  //setStateVal(props.myProps);
  useEffect(() => {
  /* async function fetchResult() {
      try {
        const response = await fetch("https://rohith5772.pythonanywhere.com/routeTimingsBasedOnBusId?busId="+busId);
        const data: BusData = await response.json();
        setStateVal(data);
        console.log(fromVal);
        console.log(toVal);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchResult();*/
    ReactGA.pageview(window.location.href);

  }, []);
  const [bus_Id, setBus_id] = useState(props.bus_Id);

  function myFunction() {
    var x = (document.getElementById("myTopnav") as HTMLInputElement);
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    }

// To display the details of the first bus going from Nagole to Raidurg:
  return (
    <div>
        <title>{titleVal}</title><meta name = "keyword" content="find bus schedule,City bus timetable, hyderabad City Bus,bus schedule,"/>
        <meta name = "keyword" content={metaContentKeywordBusId}/>
<meta name="description" content={metaContentDescriptionBusId}></meta>
    <h1 className="h1class"><a href="" title="hyderabad Bus Routes " target="_self">hyderabad City Bus Routes</a></h1>

        <div className="topnav" id="myTopnav">
        <Link id = "home" href="/india/hyderabad/home">home</Link>
        <Link id = "bustimings"  href="/india/hyderabad/bustimings" className="active">Search Bus</Link>
        <Link id = "allbuses"  href="/india/hyderabad/allbuses">All Buses</Link>
        <Link id = "contact"  href="/india/hyderabad/contact">Contact</Link>
        <Link id = "about"  href="/india/hyderabad/about">About</Link>
        <Link id = "metrotimings" href="/india/hyderabad/metrotimings">Metro Timings</Link>

  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div>
    <main>
    <h3 className="h3class allignmentClass">hyderabad City Bus Stops of Route No: {stateVal.buses_list_from?.length > 0 && stateVal.buses_list_from[0]["bus_id"]} From {stateVal.buses_list_from?.length > 0 && stateVal.buses_list_from[0]["From"]} to {stateVal.buses_list_from?.length > 0 && stateVal.buses_list_from[0]["To"]}
</h3>
    <div className="flex-wrapper">

    <table>
      <thead>
        <tr>
          <th className = "th-class">Bus Id</th>
          <th className = "th-class">Stop</th>
          {/*<th className = "th-class">Arr Time</th>*/}

        </tr>
      </thead>
      <tbody>
      {stateVal.buses_list_from?.map((bus: { stop_id: React.Key | null | undefined; 
      bus_id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; 
      Arr_Time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
    },index: any) => (
        <tr key={bus.stop_id}>
          <td className = "td-class">{stateVal.buses_list_from[index]["bus_id"]}</td>
          <td className = "td-class">{stateVal.buses_list_from[index]["stop_id"]}</td>
          {/*<td className = "td-class">{stateVal.buses_list_from[index]["Arr_Time"]}</td>*/}

    </tr>
      ))}


      </tbody>
      
    </table> 
    <h3 className="h3class allignmentClass">hyderabad City Bus Stops of Route No:{stateVal.buses_list_from?.length > 0 && stateVal.buses_list_from[0]["bus_id"]} From {stateVal.buses_list_from?.length > 0 && stateVal.buses_list_from[0]["To"]} to {stateVal.buses_list_from?.length > 0 && stateVal.buses_list_from[0]["From"]}</h3>
    <table>
      <thead>
        <tr>
          <th className = "th-class">Bus Id</th>
          <th className = "th-class">Stop</th>
          {/*<th className = "th-class">Arr Time</th>*/}

        </tr>
      </thead>
      <tbody> 
      {stateVal.buses_list_to?.map((bus: { stop_id: React.Key | null | undefined; 
      bus_id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; 
      Arr_Time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
    },index: any) => (
        <tr key={bus.stop_id}>
          <td className = "td-class">{stateVal.buses_list_to[index]["bus_id"]}</td>
          <td className = "td-class">{stateVal.buses_list_to[index]["stop_id"]}</td>
        {/*<td className = "td-class">{stateVal.buses_list_to[index]["Arr_Time"]}</td>*/}

    </tr>
      ))}


      </tbody>
      
    </table>
    <footer>
      <p>&copy; 2023 Cityroutemapper</p>
    </footer>
    </div>
    </main>

    </div>
  );
}
export async function getServerSideProps (context: any) {
  console.log(context.query.slug);
  var val = context.query.slug;
  var busId = val.split('-')[3];
  console.log(busId); 
  //const response = await fetch("https://rohith5772.pythonanywhere.com/routeTimingsBasedOnBusId?busId="+busId);
  //const response = await fetch("http://127.0.0.1:5000/routeTimingsBasedOnBusId?busId="+busId);
  const response = await fetch("https://4sd5kzlbzmjn4sosneucfpujpq0rlkjs.lambda-url.ap-south-1.on.aws/?busId="+busId);
 
  const busesList: BusData = await response.json();
  return {
    props: {busesList,busId}, // will be passed to the page component as props
  }
}
export default BusIdRouteFromTo;
 