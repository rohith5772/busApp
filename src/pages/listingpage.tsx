import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

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
const  ListingPage = (props: any) =>{
  const router = useRouter();
  const { json } = router.query;
  const fromVal = router.query.From;
  const toVal = router.query.To;
  const [stateVal, setStateVal] = useState<BusData>(props.stopList);
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
  /*useEffect(() => {
    async function fetchResult() {
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
    fetchResult();
  }, []);*/
 
  async function fetchData(busId: string, fromVal: string, toVal: string) {
    try {
     /* const response = await fetch(
        `http://127.0.0.1:5000/busroutewithtimings?busId=${busId}&fromVal=${fromVal}&toVal=${toVal}`,
        {
          mode: 'cors',
        }
      );
      const json = await response.json();*/
      router.push({
        pathname: '/details',
        query: {busId:busId,From:fromVal ,To:toVal },
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>  
    <h1 className="h1class"><a href="http://www.hyderabadcitybus.com/" title="Hyderabad Bus Routes " target="_self">Hyderabad City Bus Routes</a></h1>

        <div className="topnav" id="myTopnav">
      <a href="/" className="active">Home</a>
      <a href="bustimings">Search Bus</a>
      <a href="contact">Contact</a>
      <a href="about">About</a>
      <a href="" className="icon" onClick={myFunction}>
      <i className="fa fa-bars"></i>
      </a>
    </div> 
     <main>
     <h3 className="h3class allignmentClass">Direct Bus Routes From {stateVal.buses_list.length > 0 && stateVal.buses_list[0].From} Bus Stop To {stateVal.buses_list.length > 0 && stateVal.buses_list[0].To}</h3>

        <div className="flex-wrapper">

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
    </table>
  <footer>
    <p>&copy; 2023 Citymapper</p>
  </footer>
  </div>
  </main>

  </div>
  );
};
  
 
export async function getServerSideProps  (context: any) {
  console.log("zs");
  console.log(context.query.From,context.query.To,"abc");

  const src = "https://rohith5772.pythonanywhere.com/?from="+context.query.From+"&to="+context.query.To; 
  const response = await fetch(src);
  const stopList: BusData = await response.json();
  
  return {
    props: { stopList }, // will be passed to the page component as props
  };
}
export default ListingPage;
