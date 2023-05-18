import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ReactGA from 'react-ga';

interface BusData {
  buses_list: {
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
const  ListingPages = (props: any) =>{
  const router = useRouter();
  const { json } = router.query;
  const fromVal = router.query.From;
  const toVal = router.query.To;
  const slug = router.query.slug as string;
  // Split the slug into "from" and "to" parts
  const [from, to] = slug.split('-').map(decodeURIComponent);
  const alertStyle = {
    color: 'red',
    fontSize: '24px',
    fontWeight: 'bold',
  };
  const [stateVal, setStateVal] = useState<BusData>(props.stopList);
  const [fromStop, setFromStop] = useState(props.from);
  const [toStop, setToStop] = useState(props.to);
console.log(fromStop+"from data");
  function submitfn(busId: string,From:string,To:string) {
    console.log(busId,From,To);
    fetchData(busId,From,To);
  }
  function myFunction() {
    var x = (document.getElementById("myTopnav") as HTMLInputElement);
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  }
  useEffect(() => {
  /*  async function fetchResult() {
      try {
        const response = await fetch("https://rohith5772.pythonanywhere.com?from="+fromVal+"&to="+toVal);
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
 
  async function fetchData(busId: string, fromVal: string, toVal: string) {
    try {
     /* const response = await fetch(
        `http://127.0.0.1:5000/busroutewithtimings?busId=${busId}&fromVal=${fromVal}&toVal=${toVal}`,
        {
          mode: 'cors',
        }
      );
      const json = await response.json();*/
      /*router.push({
        pathname: '/details',
        query: {busId:busId,From:fromVal ,To:toVal },
      });*/
      router.push({
        pathname: `/details/hyderabad-city-bus-${encodeURIComponent(busId)}-that-goes-from-${encodeURIComponent(fromVal)}-to-${encodeURIComponent(toVal)}`,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
                     
    <title>Hyderabad City Bus Routes TimeTable from {fromStop} to {toStop}</title><meta name = "keyword" content="find bus schedule,City bus timetable, Hyderabad City Bus,,bus schedule,"/>

    <h1 className="h1class"><a href="" title="Hyderabad Bus Routes " target="_self">Hyderabad City Bus Routes</a></h1>

        <div className="topnav" id="myTopnav">
      <Link href="/" className="active">Home</Link>
      <Link href="/bustimings">Search Bus</Link>
      <Link href="/allbuses">All Buses</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>
      <a href="javascript:void(0);" className="icon" onClick={myFunction}>
      <i className="fa fa-bars"></i>
      </a>
    </div> 
     <main>
     <h3 className="h3class allignmentClass">Direct Bus Routes From {fromStop} To {toStop}</h3>

        <div className="flex-wrapper">
        {stateVal.buses_list.length!=0?(
      <table className="center">
        <thead>
        <tr>
          <th className="th-class">Bus Number</th>
          <th className="th-class">From Stop</th>
          <th className="th-class">To Stop</th>
        </tr>
      </thead>
        <tbody>
      {stateVal.buses_list.map((bus) => (
        <tr key={bus.bus_id}>
          <td className = "td-class" onClick={()=>submitfn(bus.bus_id,bus.From,bus.To)}><h6 className="highlighttext">{bus.bus_id}</h6></td>
          <td className = "td-class">{bus.From}</td>
          <td className = "td-class"> {bus.To}</td>
          
        </tr>
      ))}
    </tbody>
    </table>):(<h1 className="h3class allignmentClass" style={alertStyle}>Sorry, No buses are available in this root!!!</h1>)}
  <footer>
    <p>&copy; 2023 Cityroutemapper</p>
  </footer>
  </div>
  </main>

  </div>
  );
};
  
 
export async function getServerSideProps  (context: any) {
  console.log("zs");
  console.log(context.query.slug);
  var val = context.query.slug;
  var from = val.split('-')[6];
  console.log(from); 
  var to = val.split('-')[8];
  console.log(to);
  //const src = "https://rohith5772.pythonanywhere.com?from="+from+"&to="+to; 
  //const src =  "http://127.0.0.1:5000/hello?from="+from+"&to="+to; 
  const src = "https://aj4zqcmp6f2m5jkta3sbdtdcye0nskfo.lambda-url.ap-south-1.on.aws/?From="+from+"&To="+to;
  const response = await fetch(src);
  const stopList: BusData = await response.json();
  
  return {
    props: { stopList,from,to }, // will be passed to the page component as props
   
  };
}
export default ListingPages;
