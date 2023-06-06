import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ReactGA from 'react-ga';

interface BusData {
  buses_list: {
    starTime: string;
    cost: any;
    stop: string;
    dist: string;
    stopTime: number;
    time: string;
  }[];
}
const  MetroPages = (props: any) =>{
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
  const titleVal = "Hyderabad City Metro Routes TimeTable from "+props.from+" to "+props.to;
  var headingVal = "Metro Route From " + props.from + " To " + props.to;
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
                     
    <title>{titleVal}</title><meta name = "keyword" content="find bus schedule,City bus timetable, Hyderabad City Bus,,bus schedule,"/>

    <h1 className="h1class"><a href="" title="Hyderabad Bus Routes " target="_self">Hyderabad City Bus Routes</a></h1>

        <div className="topnav" id="myTopnav">
      <Link href="/">Home</Link>
      <Link href="/bustimings">Search Bus</Link>
      <Link href="/allbuses">All Buses</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>
      <Link href="/metrotimings" className="active">Metro Timings</Link>
      <a href="javascript:void(0);" className="icon" onClick={myFunction}>
      <i className="fa fa-bars"></i>
      </a>
    </div> 
     <main>
     <h3 className="h3class allignmentClass">{headingVal}</h3>

        <div className="flex-wrapper">
        {stateVal.buses_list.length!=0?(
      <table className="center">
        <thead>
        <tr>
          <th className="th-class">Bus Stop</th>
          <th className="th-class">First Trip</th>
          <th className="th-class">Last Trip</th>
          <th className="th-class">Cost</th>
          <th className="th-class">Time taken</th>
          <th className="th-class">Dist</th>



        </tr>
      </thead>
        <tbody>
      {stateVal.buses_list.map((bus) => (
        <tr key={bus.stop}>
          <td className = "td-class">{bus.stop}</td>
          <td className = "td-class">{bus.starTime} AM</td>
          <td className = "td-class"> {bus.stopTime} PM</td>
          <td className = "td-class"> Rs.{bus.cost}</td>
          <td className = "td-class"> {bus.time}</td>
          <td className = "td-class"> {bus.dist} Km</td>
        </tr>
      ))}
    </tbody>
    </table>):(<h1 className="h3class allignmentClass" style={alertStyle}>Sorry, No buses are available in this route!!!</h1>)}
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
  const src = "https://trfq2kgqt5bwkshb73zpl4n2wy0bymqs.lambda-url.ap-south-1.on.aws/?From="+from+"&To="+to;
  const response = await fetch(src);
  const stopList: BusData = await response.json();
  
  return {
    props: { stopList,from,to }, // will be passed to the page component as props
   
  };
}
export default MetroPages;
