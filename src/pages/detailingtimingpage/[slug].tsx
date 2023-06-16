import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ReactGA from 'react-ga';

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

const  DetailingTimings = (props: any) =>{
  const router = useRouter();
  const { json } = router.query;
  const fromVal = router.query.From;
  const toVal = router.query.To;
  const [stateVal, setStateVal] = useState<BusData>(props.stopList);
  const titleVal = "hyderabad City Bus Routes TimeTable of route " +props.bus_Id+ " from " +props.from+ " to " +props.to;

  useEffect(() => {
  /*  async function fetchResult() {
      try {
        const response = await fetch('http://127.0.0.1:5000/busroutewithtimings');
        const data: BusData = await response.json();
        setStateVal(data);
        console.log(fromVal);
        console.log(toVal);
      } catch (error) {
        console.error(error);
      }
    }
    fetchResult();
    */
    ReactGA.pageview(window.location.href);

       },[] );
    function myFunction() {
    var x = (document.getElementById("myTopnav") as HTMLInputElement);
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    }
    return <div>
      <title>{titleVal}</title><meta name = "keyword" content="find bus schedule,City bus timetable, hyderabad City Bus,,bus schedule,"/>
   <h1 className="h1class"><a href="" title="hyderabad Bus Routes " target="_self">hyderabad City Bus Routes</a></h1>

       {/* <div>{location.state[0]}</div>
       <div>{location.state[1]}</div>
       <div>{location.state[2]}</div>
        <button onClick={() => { next("/") }}>Back To home</button> */}
        {/* {location.state.map((bus: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, index: number) => (
        <div key={index}>
          <p>{index}. {bus.name}</p>
        </div>
      ))} */}
  <div className="topnav" id="myTopnav">
  <Link href="/" className="active">home</Link>
  <Link href="/bustimings">Search Bus</Link>
  <Link href="/allbuses">All Buses</Link>
  <Link href="/contact">Contact</Link>
  <Link href="/about">About</Link>
  <Link href="/metrotimings">Metro Timings</Link>

  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div>
    <main>
    <div className="flex-wrapper">

    <table>
      <thead>
        <tr>
          <th className = "th-class">Stop</th>
          <th className = "th-class">Timings</th>
        </tr>
      </thead>
      <tbody>
      {stateVal.buses_list.map((bus: { bus_id: React.Key | null | undefined; 
      stop_id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; 
      Freq: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
      Arr_Time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
      Stop_Timings: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
    },index: any) => (
        <tr key={bus.bus_id}>
          <td className = "td-class">{bus.stop_id}</td>
          {/* <td onClick={(location.state.buses_list[index].Stop_Timings)}>{bus.Stop_Timings}{location.state.buses_list[index].Stop_Timings[0]},{location.state.buses_list[index].Stop_Timings[1]}</td> */}
          <td className = "td-class">{stateVal.buses_list[index].Stop_Timings.map((timings : any , i : number)=>{
            if(stateVal.buses_list[index].Stop_Timings.length - 1 === i)
            return (<span key={i}>{timings} </span>)
            else{
              return (<span key={i}>{timings} , </span>)
            }
          })}</td>
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
}
export async function getServerSideProps (context: any) {
  var val = context.query.slug;
  var busId = val.split('-')[3];
  var from = val.split('-')[7];
  console.log(busId,from); 
  var to = val.split('-')[9];
  console.log(to);
  //const response = await fetch("https://rohith5772.pythonanywhere.com/busroutewithtimings?busId="+busId+"&fromVal="+from+"&toVal="+to);
  const response = await fetch("https://buwudfhowtxh2cgkwtrqucdnqy0ibsmy.lambda-url.ap-south-1.on.aws/?busId="+busId+"&fromVal="+from+"&toVal="+to);

  const stopList: BusData = await response.json();
return {
props: {stopList,from,to}, // will be passed to the page component as props
}}
export default DetailingTimings;
